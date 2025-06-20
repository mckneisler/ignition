import { StepEdge, MarkerType } from '@xyflow/react';

export default function RelationshipEdge({ id, sourceX, sourceY, targetX, targetY }) {
    return <StepEdge id={id} sourceX={sourceX} sourceY={sourceY} targetX={targetX} targetY={targetY}  />;
}
