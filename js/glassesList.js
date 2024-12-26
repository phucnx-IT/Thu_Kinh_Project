export class GlassesList {
        constructor() {
                this.glasses = [];
        }

        addGlasses(glasses) {
                this.glasses.push(glasses);
        }

        renderGlasses() {
                let content = '';
                content = this.glasses.reduce((glassContent, item, index) => {
                        glassContent += `<div class="col-4">
                                <img class="img-fluid" data-id="${item.id}" onclick="wareGlasses(event)" src="${item.src}" alt="${item.name}">
                        </div>`
                        return glassContent;
                }, '');
                return content;
        }
}