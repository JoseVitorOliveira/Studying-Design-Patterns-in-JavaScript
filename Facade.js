/* Decorator Design Pattern */

/* is a structural design pattern that provides a simplified interface
 to a larger body of code */

// Complex parts

class API {
    static fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched from API");
            }, 3000);
        });
    }
}

class DataProcessor {
    static process(data) {
        return `Data processed: ${data}`;
    }
}

class Ui {
    static display(data) {
        console.log("Data displayed on UI:", data);
    }
}

// Facade

class AppFacade {
    static async start() {
        try {
            // Complex parts
            const data = await API.fetchData();
            const processedData = DataProcessor.process(data);
            Ui.display(processedData);
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
}

//Simple Start Using Facade
AppFacade.start();