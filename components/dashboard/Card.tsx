"use client";

const Card = ({ title, description, content, fontSizeLevel = '5xl' }: {
    title?: string;
    description?: string;
    content?: string | number ;
    fontSizeLevel?: string;
}) => {
    return (
        <div className="bg-white bg-opacity-70 rounded-lg shadow-md p-6 border-dotted border-4 border-pink-500 shadow-lg shadow-pink-500/50">
            <h1 className="text-lg font-semibold mb-4">{ title }</h1>
            <p className="text-sm font-semibold mb-4 text-right">{ description }</p>
            <p className={`text-${fontSizeLevel} text-gray-600 text-center`}>{ content } </p>
        </div>
    )}

export default Card
