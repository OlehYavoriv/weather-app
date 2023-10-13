export const formatTime = (time: string) => {
    const date = new Date(time);
    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minutes}`;
};
