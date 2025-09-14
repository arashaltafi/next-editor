export const trimStrings = <T>(obj: T): T => {
    if (typeof obj === 'string') {
        return (obj.trim() as unknown) as T;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => trimStrings(item)) as unknown as T;
    }
    if (obj && typeof obj === 'object') {
        const out: any = {};
        for (const [key, val] of Object.entries(obj)) {
            out[key] = trimStrings(val as any);
        }
        return out;
    }
    return obj;
}

export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject(new Error('Failed to read file'));
            }
        };
        reader.onerror = error => reject(error);
    });
}

export const openMail = (email?: string, subject?: string, body?: string) => {
    if (!email) return;

    try {
        const params = [];
        if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
        if (body) params.push(`body=${encodeURIComponent(body)}`);

        const query = params.length > 0 ? `?${params.join('&')}` : '';
        window.open(`mailto:${email}${query}`);
    } catch (error: any) {
        console.error(error.message)
    }
}

export const openPhone = (phone?: string) => {
    if (!phone) return;

    try {
        window.open(`tel:${phone}`);
    } catch (error: any) {
        console.error(error.message)
    }
}

export const mapQuillToTailwind = (html: string): string => {
    return html
        // alignment
        // .replace(/class="ql-align-center"/g, 'class="text-center"')
        // .replace(/class="ql-align-right"/g, 'class="text-right"')
        // .replace(/class="ql-align-justify"/g, 'class="text-justify"')
        // .replace(/class="ql-align-left"/g, 'class="text-left"')

        // heading sizes: Quill may output headings as <h1> ... but if it adds classes
        .replace(/<h1>/g, '<h1 class="text-3xl font-bold">')
        .replace(/<h2>/g, '<h2 class="text-2xl font-semibold">')
        .replace(/<h3>/g, '<h3 class="text-xl font-semibold">')
        .replace(/<h4>/g, '<h3 class="text-lg font-semibold">')
        .replace(/<h5>/g, '<h3 class="text-base font-medium">')
        .replace(/<h6>/g, '<h3 class="text-sm font-normal">')

        // font size sizes
        // .replace(/class="ql-size-small"/g, 'class="text-sm"')
        // .replace(/class="ql-size-large"/g, 'class="text-lg"')
        // .replace(/class="ql-size-huge"/g, 'class="text-xl"')

        // text styles
        // .replace(/class="ql-bold"/g, 'class="font-bold"')
        // .replace(/class="ql-italic"/g, 'class="italic"')
        // .replace(/class="ql-underline"/g, 'class="underline"')
        // .replace(/class="ql-strike"/g, 'class="line-through"')

        // blockquote
        // .replace(/<blockquote>/g, '<blockquote class="border-l-4 pl-4 italic text-gray-600">')

        // code block
        // .replace(/<pre><code>/g, '<pre class="bg-gray-100 p-3 rounded overflow-auto font-mono"><code>')
        // // lists: Quill may wrap ul/ol without class.
        // .replace(/<ol>/g, '<ol class="list-decimal ml-6">')
        // .replace(/<ul>/g, '<ul class="list-disc ml-6">')

        // colors & backgrounds: detect inline style attributes
        // .replace(/style="color:([^;"]+)"/g, (_match, c) => `class="text-[${c.trim()}]"`)
        // .replace(/style="background-color:([^;"]+)"/g, (_match, c) => `class="bg-[${c.trim()}]"`)

        // fallback leaflet: strip ql- prefix lingering
        // .replace(/\s*class="ql-[^"]+"/g, '')
        ;
}

export const lowercaseFirstLetter = (str: string): string => {
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return as is for non-strings or empty strings
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export const capitalizeFirstLetter = (str: string) => {
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return as is if not a string or empty
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}