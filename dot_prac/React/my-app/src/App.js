import "./App.css";
import Card from "./components/Card";
import "./components/Item";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
    // const itemTwo = "ABCD";
    const response = [
        {
            itemName: "Nirma",
            itemDate: "20",
            itemMonth: "June",
            itemYear: "1998",
        },
        {
            itemName: "Nirma1",
            itemDate: "201",
            itemMonth: "June1",
            itemYear: "19981",
        },
        {
            itemName: "Nirma2",
            itemDate: "202",
            itemMonth: "June2",
            itemYear: "19982",
        },
    ];
    return (
        <div className="App">
            <Card>
                <Item name={response[0].itemName}>
                    Hello, I'm the first Item
                </Item>
                <ItemDate
                    day={response[0].itemDate}
                    month={response[0].itemMonth}
                    year={response[0].itemYear}
                ></ItemDate>

                <Item name={response[1].itemName}></Item>
                <ItemDate
                    day={response[1].itemDate}
                    month={response[1].itemMonth}
                    year={response[1].itemYear}
                ></ItemDate>

                <Item name={response[2].itemName}></Item>
                <ItemDate
                    day={response[2].itemDate}
                    month={response[2].itemMonth}
                    year={response[2].itemYear}
                ></ItemDate>

                <h1 className="hello">Hello React</h1>
            </Card>
        </div>
    );
}

export default App;
