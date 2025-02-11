
const apiURL = ""

export const fetchTasks = async () => {
    try {
        const response = await fetch(apiURL)
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}