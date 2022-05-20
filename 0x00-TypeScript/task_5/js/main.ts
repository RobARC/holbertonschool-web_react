export interface MajorCredits {
    credits: number;
    brand: 'brand_X';
}
export interface MinorCredits {
    credits: number;
    brand: 'brand_Z';
}

export function sumMajorCredits(subject1: number, subject2: number): number{
    return subject1 + subject2;
}

export function sumMinorCredits(subject1: number, subject2: number): number {
    return subject1 + subject2;
}