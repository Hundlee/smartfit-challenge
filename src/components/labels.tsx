import { LABELS } from "../constants/labels";

const Labels = () => {
    return (
        <div className="px-5 mt-5">
            <div className="px-5 pt-14 py-7 bg-brand-lightGrey bg-opacity-10 flex flex-col gap-12">
                {LABELS.map((label) => (
                    <div className="flex flex-col gap-6">
                        <h3
                            className="font-semibold text-xl text-center"
                            key={label.description}
                        >
                            {label.description}
                        </h3>

                        <div className="flex justify-center gap-6">
                            {label.images.map((images) => (
                                <div className="flex flex-col items-center">
                                    <img
                                        width={75}
                                        height={75}
                                        src={images.url}
                                        alt={images.alt}
                                        key={images.url}
                                    />
                                    <p className="text-center">
                                        {images.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Labels;
