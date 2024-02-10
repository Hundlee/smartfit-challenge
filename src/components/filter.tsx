import { useState } from "react";
import Button from "./button";

const Filter = () => {
    const [period, setPeriod] = useState<string>();
    const [showCloseUnits, setShowCloseUnits] = useState(false);

    return (
        <div className="px-5">
            <div className="rounded-lg border-solid border-2 p-5">
                <div className="flex items-center gap-2">
                    <img src="./icon-hour.png" width={24} />
                    <p className="text-brand-lightGrey">Horário</p>
                </div>

                <h2 className="text-2xl text-brand-lightGrey mt-5 pb-4 border-b border-solid border-brand-lightGrey border-opacity-35">
                    Qual período que treinar?
                </h2>

                <div className="flex flex-col gap-5">
                    <div className="flex justify-between mt-5 border-b border-solid border-brand-lightGrey border-opacity-35 pb-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="morning"
                                name="period"
                                value="morning"
                                className="w-4 h-4"
                                checked={period === "morning"}
                                onChange={(e) =>
                                    setPeriod(e.currentTarget.value)
                                }
                            />
                            <label
                                htmlFor="morning"
                                className="text-brand-lightGrey"
                            >
                                Manhã
                            </label>
                        </div>

                        <p>06:01 às 12:00</p>
                    </div>
                    <div className="flex justify-between border-b border-solid border-brand-lightGrey border-opacity-35 pb-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="afternoon"
                                name="period"
                                value="afternoon"
                                className="w-4 h-4"
                                checked={period === "afternoon"}
                                onChange={(e) =>
                                    setPeriod(e.currentTarget.value)
                                }
                            />
                            <label
                                htmlFor="afternoon"
                                className="text-brand-lightGrey"
                            >
                                Tarde
                            </label>
                        </div>

                        <p>12:01 às 18:00</p>
                    </div>
                    <div className="flex justify-between border-b border-solid border-brand-lightGrey border-opacity-35 pb-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="evening"
                                name="period"
                                value="evening"
                                className="w-4 h-4"
                                checked={period === "evening"}
                                onChange={(e) =>
                                    setPeriod(e.currentTarget.value)
                                }
                            />
                            <label
                                htmlFor="evening"
                                className="text-brand-lightGrey"
                            >
                                Noite
                            </label>
                        </div>
                        <p>18:01 às 23:00</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 justify-center mt-5">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="showCloseUnits"
                            id="showCloseUnits"
                            className="w-4 h-4"
                            checked={showCloseUnits}
                            onChange={() => setShowCloseUnits((prev) => !prev)}
                        />
                        <label htmlFor="showCloseUnits">
                            Exibir unidades próximas
                        </label>
                    </div>

                    <h3>
                        Resultados encontrados:{" "}
                        <span className="font-semibold text-lg">0</span>
                    </h3>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                    <Button variant="primary">Encontrar unidade</Button>
                    <Button variant="outlined">Limpar</Button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
