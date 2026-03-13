import { splitIntoSegments } from './utils';

export async function parsePDFFile(file: File) {
    try {

        const pdfjsLib = await import('pdfjs-dist');

        if (typeof window !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
        }

        // Read file as array buffer
        const arrayBuffer = await file.arrayBuffer();

        // Load PDF document
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdfDocument = await loadingTask.promise;

        // Render first page as cover image
        const firstPage = await pdfDocument.getPage(1);
        const viewport = firstPage.getViewport({ scale: 2 });

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext('2d');

        if (!context) {
            throw new Error('Could not get canvas context');
        }

        await firstPage.render({
            canvasContext: context,
            viewport: viewport,
        }).promise;

        const coverDataURL = canvas.toDataURL('image/png');

        let fullText = '';

        for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
            const page = await pdfDocument.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
                .filter((item) => 'str' in item)
                .map((item) => (item as { str: string }).str)
                .join(' ');
            fullText += pageText + '\n';
        }

        const segments = splitIntoSegments(fullText);

        await pdfDocument.destroy();

        return {
            content: segments,
            cover: coverDataURL,
        };
    } catch (error) {
        console.error('Error parsing PDF:', error);
        throw new Error(`Failed to parse PDF file: ${error instanceof Error ? error.message : String(error)}`);
    }
};