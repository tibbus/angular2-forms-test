import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'objectToArray'
})
export class ObjectToArray implements PipeTransform {
    transform(object) {
        const valuesArray: string[] = [];

        for (let key in object) {
            valuesArray.push(key);
        }

        return valuesArray;
    }
}