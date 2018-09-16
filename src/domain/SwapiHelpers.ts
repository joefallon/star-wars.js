
export class SwapiHelpers {

    public static getIdFromUrl(url: string): number {
        const segments = url.split('/');
        const id       = parseInt(segments[segments.length - 2], 10);

        if(isNaN(id)) {
            return 0;
        }

        return id;
    }
}