import { useQuery } from "react-query";
import { ILocation } from "../types/location";
import LocationItem from "./location-item";

const Locations = () => {
    const { data } = useQuery<{ locations: ILocation[] }>("locations", () =>
        fetch(
            "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
        ).then((res) => res.json())
    );

    return (
        <div className="flex flex-col gap-4 px-5 mt-5">
            {data?.locations.map((i, index) => (
                <LocationItem location={i} key={index} />
            ))}
        </div>
    );
};

export default Locations;
