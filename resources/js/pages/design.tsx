import React, { useCallback, useMemo } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    Panel,
    useNodesState,
    useEdgesState,
    addEdge,
    MarkerType
} from '@xyflow/react';
import EntityNode from '@/components/design/EntityNode';
import RelationshipEdge from '@/components/design/RelationshipEdge';

import '@xyflow/react/dist/base.css';
import '@xyflow/react/dist/style.css';

const initialNodes = [
    {
        id: '1',
        type: 'entity',
        position: { x: 0, y: 0 },
        data: {
            name: 'Artists',
            columns: [
                {
                    name: 'Id',
                    type: "Integer",
                    index: 'Primary Key'
                },
                {
                    name: 'Name',
                    type: "String",
                    index: 'None'
                },
                {
                    name: 'Created At',
                    type: "Timestamp",
                    index: 'None'
                },
                {
                    name: 'Updated At',
                    type: "Timestamp",
                    index: 'None'
                },
                {
                    name: 'Created By',
                    type: "Integer",
                    index: 'Foreign Key'
                },
                {
                    name: 'Updated By',
                    type: "Integer",
                    index: 'Foreign Key'
                }
            ]
        },
    },
    {
        id: '2',
        type: 'entity',
        position: { x: 300, y: 0 },
        data: {
            name: 'Album',
            columns: [
                {
                    name: 'Id',
                    type: "Integer",
                    index: 'Primary Key'
                },
                {
                    name: 'Name',
                    type: "String",
                    index: 'None'
                },
                {
                    name: 'Artist Id',
                    type: "Integer",
                    index: 'Foreign Key'
                },
                {
                    name: 'Created At',
                    type: "Timestamp",
                    index: 'None'
                },
                {
                    name: 'Updated At',
                    type: "Timestamp",
                    index: 'None'
                },
                {
                    name: 'Created By',
                    type: "Integer",
                    index: 'Foreign Key'
                },
                {
                    name: 'Updated By',
                    type: "Integer",
                    index: 'Foreign Key'
                },
            ]
        },
    },
    {
        id: '3',
        type: 'entity',
        position: { x: 600, y: 0 },
        data: {
            name: 'Song',
            columns: [
                {
                    name: 'Id',
                    type: "Integer",
                    index: 'Primary Key'
                },
                {
                    name: 'Name',
                    type: "String",
                    index: 'None'
                },
                {
                    name: 'Artist Id',
                    type: "Integer",
                    index: 'Foreign Key'
                },
                {
                    name: 'Album Id',
                    type: "Integer",
                    index: 'Foreign Key'
                },
                {
                    name: 'Created At',
                    type: "Timestamp",
                    index: 'None'
                },
                {
                    name: 'Updated At',
                    type: "Timestamp",
                    index: 'None'
                },
                {
                    name: 'Created By',
                    type: "Integer",
                    index: 'Foreign Key'
                },
                {
                    name: 'Updated By',
                    type: "Integer",
                    index: 'Foreign Key'
                },
            ]
        },
    },
];
const initialEdges = [
    {
        id: 'e1-2',
        type: 'smoothstep',
        source: '1',
        target: '2',
        markerStart: "1",
        markerEnd: {type: MarkerType.Arrow},
        label: 'test',
    },
    {
        id: 'e1-3',
        type: 'smoothstep',
        source: '1',
        target: '3',
        markerStart: "1",
        markerEnd: "N",
        label: 'test',
    },
    {
        id: 'e2-3',
        type: 'smoothstep',
        source: '2',
        target: '3',
        markerStart: "1",
        markerEnd: "N",
        label: 'test',
    },
];

export default function App() {
    const nodeTypes = useMemo(() => ({ entity: EntityNode }), []);
    const edgeTypes = useMemo(() => ({ relationship: RelationshipEdge }), []);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                colorMode="system"
                fitView
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                preventScrolling={false}
            >
                <Panel position="top-right">
                    <button className="xy-theme__button">+</button>
                </Panel>
                <Controls />
                <MiniMap />
                <Background gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}
