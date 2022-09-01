export interface Hasher {
  hash(target: any): Promise<string>;
}