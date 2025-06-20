import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { CircleStackIcon, Bars3Icon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { KeyIcon, BarsArrowDownIcon, ClockIcon } from '@heroicons/react/24/solid'
import { CascadeLettersIcon, CascadeNumbersIcon } from './CustomIcons.jsx';

function EntityTitleBar({ data }) {
    return (
        <div className="bg-red-400 px-4 py-2 flex items-center justify-between">
            <CircleStackIcon className="size-6" />
            <h2 className="text-lg font-medium text-gray-800 pr-3 pl-3">{data.name}</h2>
            <Bars3Icon className="size-6 right-0" />
        </div>
    )
}

function IndexTypeIcon({index}) {
    let iconClass = 'size-4 right-0';
    let primaryColorClass = ' text-amber-400';
    let secondayColorClass = ' text-cyan-700';
    let indexIcon = ' ';

    switch (index) {
        case "Primary Key":
            indexIcon = <KeyIcon className={iconClass + primaryColorClass} />
            break;
        case "Foreign Key":
            indexIcon = <KeyIcon className={iconClass + secondayColorClass} />
            break;
        case "Unique":
            indexIcon = <BarsArrowDownIcon className={iconClass + primaryColorClass} />
            break;
        case "Index":
            indexIcon = <BarsArrowDownIcon className={iconClass + secondayColorClass} />
            break;
    }

    return (
        indexIcon
    )
}

function DataTypeIcon({column}) {
    let iconClass = "size-4";
    let typeIcon = <QuestionMarkCircleIcon className={iconClass} />;
    const vowels = "aeiou";
    const article = vowels.includes(column.type.charAt(0).toLowerCase()) ? "an" : "a";
    let title = column.name + " is " + article + column.type;

    switch (column.type) {
        case "Integer":
            typeIcon = <CascadeNumbersIcon className={iconClass} title={title} />;
            break;
        case "String":
            typeIcon = <CascadeLettersIcon className={iconClass} />
            break;
        case "Timestamp":
            typeIcon = <ClockIcon className={iconClass} />
            break;
    }

    return (
        typeIcon
    )
}

function EntityColumnData({text}) {
    return (
        <td className="size-5 text-gray-800 p-2 whitespace-nowrap">{text}</td>
    )
}

function EntityColumnRow({column}) {
    return (
        <tr className="">
            <td><IndexTypeIcon index={column.index} /> </td>
            <EntityColumnData text={column.name} />
            <td><DataTypeIcon column={column} /> </td>
        </tr>
    )
}
function EntityColumns({columns}) {
    const rows = [];
    columns.forEach((column, i) => {
        rows.push(<EntityColumnRow column={column} key={i} />);
    })
    return (
        <div className="w-full min-w-0 overflow-x-auto">
            <table className="table-auto w-full border-collapse">
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    );
}
function EntityNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="max-w-xs mx-auto bg-red-200 rounded-lg shadow-md overflow-hidden border border-black">
            <EntityTitleBar data={data} />
            <div className="px-4 py-5 sm:p-6">
                <EntityColumns columns={data.columns} />
            </div>
            <Handle position={Position.Bottom} type="source" />
            <Handle position={Position.Top} type="target" />
        </div>
    );
}

export default EntityNode;
