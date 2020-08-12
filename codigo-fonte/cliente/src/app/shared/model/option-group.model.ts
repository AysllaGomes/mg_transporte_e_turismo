import { Option } from './option.model';

export class OptionGroup {

    /**
     * OptionGroup constructor.
     *
     * @param value
     * @param label
     * @param items
     */
    constructor(
        public value: number | string,
        public label: string,
        public items: Option[]
    ) {}

}
