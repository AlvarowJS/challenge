import { ItemHandler } from '../models/ItemHandler';

export class SulfurasHandler extends ItemHandler {
    update(): void {
        this.item.quality = 80;       
    }
}
