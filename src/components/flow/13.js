// part 18
// SVGPortModel.js
// import the necessary modules
import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

// define the SVGPortModel class
export class SVGPortModel extends PortModel {
    constructor(options = {}) {
        // initialize the SVGPortModel with the given options
        super({
            ...options,
            type: 'svg-port'
        });
    }

    // create a new link from this port
    createLinkModel() {
        return new DefaultLinkModel();
    }
}
