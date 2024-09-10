import { useState } from "react";
import { Car } from "../types/car";

export const Main = ({name, age, cars}: {
    name: string;
    age: number;
    cars: Car[];
}) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, setValue] = useState<string>("hola");


    return <div className="container mx-auto flex flex-col gap-10 p-5">
        <div className="flex flex-col center-y">
            <h1 className="text-3xl">
                Hello, {name}! Welcome to my React project!
            </h1>
            <h2 className="text-2xl">I am {age} years old.</h2>
            <p>
                This is mi react project.
            </p>
        </div>
        <div>
            <h3 className="text-xl">My Cars</h3>
            <table className="w-full">
                <thead className="p-3 bg-gray-200 rounded-md">
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                    </tr>
                </thead>

                <tbody>
                    {cars.map(car => {
                        return <tr className="">
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.color}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

        <div>
            <h3>Testing use state {value}</h3>
            <button className="block p-3 border" onClick={
                () => setValue("adios")
            }>Update value</button>
        </div>
    </div>
}