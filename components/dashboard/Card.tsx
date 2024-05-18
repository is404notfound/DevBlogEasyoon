"use client";
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, content, fontSizeLevel = '6xl' }: {
    title?: string;
    description?: string;
    content?: any;
    fontSizeLevel?: string;
}) => {
    const { t } = useTranslation();
    const getCharOrder = (currentNum: number)=> String.fromCharCode(currentNum + 65);
    const isArray = Array.isArray(content);

    return (
        <div className="bg-white bg-opacity-70 rounded-lg shadow-md p-6 border-dotted border-4 border-pink-500 shadow-lg shadow-pink-500/50">
            <h1 className="text-lg font-semibold mb-4">{ t(title || '') }</h1>
            <p className="text-sm font-semibold mb-4 text-right">{ t(description || '') } </p>
            <div className={`text-${ fontSizeLevel } text-gray-600 text-${isArray ? '' : 'center'}`}>{
                isArray ? content.map((row: string, index: number)=> {
                    return (<p key={`${index}_${row}`}>{getCharOrder(index)}... { row }</p>)
                }): content
            } </div>
        </div>
    )
}

export default Card
