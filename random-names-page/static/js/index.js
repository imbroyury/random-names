const fetchRandomName = async () => {
    try {
        const response = await fetch(`/random-name`);
        if (!response.ok) {
            throw response;
        }
        const text = await response.text();
        return text;
    } catch(e) {
        console.log(e);
        return 'unfetched_mclean';
    }
}

const setRandomName = (name) => {
    const namesElement = document.getElementById('names');
    namesElement.innerText = name;
}

const fetchAndSet = async () => setRandomName(await fetchRandomName());

const init = async () => {
    const schedule = async () => {
        await fetchAndSet();
        setTimeout(schedule, 1000);
    }

    schedule();
};

init();