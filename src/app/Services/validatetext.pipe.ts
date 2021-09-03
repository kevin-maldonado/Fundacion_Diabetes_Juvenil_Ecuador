import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'validatetext'
})
export class ValidatetextPipe implements PipeTransform {

    transform(value: any): any {

        if (value !== undefined) {
            const text = value.split('*');
            let resultado = '';
            for (const post of text) {
                if (post !== '') {
                    if (text.length > 1) {
                        resultado += ` ● ${post}`
                    } else {
                        return value;
                    }
                }

            }
            return resultado;
        }


    }

}
