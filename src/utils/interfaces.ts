export interface IUser {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
    };
    location: {
        street: {
            name: string;
            number: number;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        }
    };
}

export interface IWeatherIcon {
    day: {
        description: string;
        image: string;
    };
    night: {
        description: string;
        image: string;
    };
}
