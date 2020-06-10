export class Test {
    #private: string = "hey ";
    
    pluse(num: string) {
        const ans: string = this.#private + num
        return ans
    }
}