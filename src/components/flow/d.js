// import React and the library
import React, { useEffect, useRef } from "react";
import createEngine, {
    DiagramModel,
    DefaultNodeModel,
    DefaultLinkModel,
    DefaultPortModel,
    DiagramEngine,
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DemoCanvasWidget } from "./DemoCanvasWidget";


// define a custom node component
const CustomNode = (props) => {
    // use a ref to access the underlying DOM element
    const nodeRef = useRef();

    // use an effect to update the node position and size
    useEffect(() => {
        // get the node model from the props
        const node = props.node;

        // get the DOM element
        const element = nodeRef.current;

        // update the node position and size
        node.setPosition(element.offsetLeft, element.offsetTop);
        node.setSize(element.offsetWidth, element.offsetHeight);
    });

    // return a JSX element that represents the node
    return (
        <div
            ref={nodeRef}
            className="custom-node"
            style={{
                position: "absolute",
                width: 100,
                height: 100,
                backgroundColor: props.node.color,
            }}
        >
            <p>{props.node.name}</p>
        </div>
    );
};

// define a custom link component
const CustomLink = (props) => {
    // use a ref to access the underlying DOM element
    const linkRef = useRef();

    // use an effect to update the link points
    useEffect(() => {
        // get the link model from the props
        const link = props.link;

        // get the DOM element
        const element = linkRef.current;

        // get the SVG path element
        const path = element.querySelector("path");

        // get the points from the path
        const points = path.getAttribute("d").split(" ");

        // update the link points
        link.setPoints([
            link.getPoint(0),
            new DefaultPortModel({
                x: parseInt(points[1]),
                y: parseInt(points[2]),
            }),
            new DefaultPortModel({
                x: parseInt(points[4]),
                y: parseInt(points[5]),
            }),
            link.getPoint(link.getPoints().length - 1),
        ]);
    });

    // return a JSX element that represents the link
    return (
        <div ref={linkRef} className="custom-link">
            {props.children}
        </div>
    );
};

// define a functional component that renders the diagram
const Diagram = () => {
    // create a ref to store the diagram engine
    const engineRef = useRef();

    
    // use an effect to initialize the diagram engine and model
    useEffect(() => {
        // create a new diagram engine
        const engine = createEngine();
        //engine.getNodeFactories().registerFactory(new CustomNodeFactory());

        // create a new diagram model
        const model = new DiagramModel();

        // create some custom nodes
        const node1 = new DefaultNodeModel({
            name: "Node 1",
            color: "red",
        });
        node1.setPosition(100, 100);
        node1.addPort(new DefaultPortModel({ name: "out", position: "right" }));


        const node2 = new DefaultNodeModel({
            name: "Node 2",
            color: "green",
        });
        node2.setPosition(400, 100);
        // create and add a port named "in" with the position "left"
        node2.addPort(new DefaultPortModel({ name: "in", position: "left" }));
        // create and add a port named "out" with the position "right"
        node2.addPort(new DefaultPortModel({ name: "out", position: "right" }));

        const node3 = new DefaultNodeModel({
            name: "Node 3",
            color: "blue",
        });
        node3.setPosition(400, 400);
        // create and add a port named "in" with the position "left"
        node3.addPort(new DefaultPortModel({ name: "in", position: "left" }));

        // create some custom links
        const link1 = new DefaultLinkModel();
        link1.setSourcePort(node1.getPort("out"));
        link1.setTargetPort(node2.getPort("in"));

        const link2 = new DefaultLinkModel();
        link2.setSourcePort(node2.getPort("out"));
        link2.setTargetPort(node3.getPort("in"));

        // add the nodes and links to the model
        model.addAll(node1, node2, node3, link1, link2);

        // register the custom components to the engine
        engine.getNodeFactories().registerFactory({
            type: "default",
            getNewInstance: () => new DefaultNodeModel(),
            getWidget: (event) => <CustomNode node={event.model} />,
        });

        engine.getLinkFactories().registerFactory({
            type: "default",
            getNewInstance: () => new DefaultLinkModel(),
            getWidget: (event) => <CustomLink link={event.model} />,
        });

        
        // set the model to the engine
        engine.setModel(model);

        // store the engine in the ref
        engineRef.current = engine;
    }, []);
    

    // use a sample rest api for models
    const fetchModels = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // simulate some data from the server
                const data = [
                    { name: "Node 4", color: "yellow", x: 100, y: 400 },
                    { name: "Node 5", color: "purple", x: 250, y: 250 },
                ];
                resolve(data);
            }, 1000);
        });
    };

    // use an effect to update the model with the data from the server
    useEffect(() => {
        // get the engine and model from the ref
        const engine = engineRef.current;
        const model = engine.getModel();

        // fetch the models from the server
        fetchModels().then((data) => {
            // create new nodes from the data
            const newNodes = data.map((item) => {
                const node = new DefaultNodeModel(item);
                node.setPosition(item.x, item.y);
                return node;
            });

            // add the new nodes to the model
            model.addAll(...newNodes);

            // update the engine
            engine.repaintCanvas();
        });
    }, []);

    // return a JSX element that renders the diagram
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "lightgray",
            }}
        >
            {engineRef.current && (
                   <DemoCanvasWidget>
                <CanvasWidget engine={engineRef.current} className="canvas" />
                </DemoCanvasWidget>
            )}
        </div>
    );
};

export default Diagram;
