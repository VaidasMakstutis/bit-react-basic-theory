import axios from "axios";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./Components/Books/Book";
import List from "./Components/Books/List";
import NotFound from "./Components/Books/NotFound";
import Books from "./Contexts/Books";

function App() {

    const [books, setBooks] = useState({ showBooks: [], masterBooks: [] })

   


    const [singleRange, setSingleRange] = useState([0, 0]);
    const [singleRangeMinMax, setSingleRangeMinMax] =
        useState({ min: 0, max: 0 });

    // TIC TAC

    const timerID = useRef();

    // const tick = () => {
    //     filterRangePrice(singleRange);
    // }

    const filterRangePrice = value => {
        const min = Math.min(value[0], value[1]);
        const max = Math.max(value[0], value[1]);
        const filtered = books.masterBooks.filter(b =>
            b.price <= Math.ceil(max / 100) && b.price >= Math.floor(min / 100));
        setBooks({
            showBooks: filtered,
            masterBooks: books.masterBooks.slice()
        })
        // setBooks(prevState => {
        //     return {
        //         ...prevState,
        //         showBooks: filtered
        //     };
        // });
    }


    const tick = useCallback(
        () => {
            filterRangePrice(singleRange);
        },
        [singleRange]
    )


    useEffect(() => {
        console.log('use effect')
        timerID.current = setInterval(
            () => tick(),
            1000
        );
        return () => clearInterval(timerID.current);
    }, [tick]);


    useEffect(() => {

        axios.get('https://in3.dev/knygos/')
            .then(res => {
                setBooks({
                    showBooks: res.data.slice(),
                    masterBooks: res.data.slice()
                });
                getMinMaxPrices(res.data.slice());
            });

        // fetch('https://in3.dev/knygos/')
        // .then(res => res.json())
        // .then(data => {
        //     setBooks({
        //         showBooks: data,
        //         masterBooks: data
        //     })
        // });

    }, [])

    // SLIDERS //

    // const [singleSlider, setSingleSlider] = useState(0);
    // const [singleSliderMinMax, setSingleSliderMinMax] =
    //     useState({ min: 0, max: 0 });




    // const sliderSlowDown = useRef(false);
    // const slideInit = useRef(false);

    // const onSingleSliderChange = value => {
    //     setSingleSlider(value);
    //     if (!slideInit.current) {
    //         slideInit.current = true;
    //         return;
    //     }
    //     if (!sliderSlowDown.current) {
    //         sliderSlowDown.current = true;
    //         setTimeout(() => {
    //             filterMaxPrice(value);
    //         }, 500);
    //     }
    // }


    const onSingleRangeChange = value => {
        setSingleRange(value);
    }

    const getMinMaxPrices = books => {
        books.sort((a, b) => a.price - b.price);
        const min = Math.round(books[0].price * 100);
        const max = Math.round(books[books.length - 1].price * 100);
        // setSingleSliderMinMax({ min: min, max: max });
        setSingleRangeMinMax({ min: min, max: max });
        setSingleRange([min, max]);
        // setSingleSlider(max);
    }


    // FILTERS
    // const filterMaxPrice = value => {
    //     sliderSlowDown.current = false;
    //     const masterCopy = [...books.masterBooks];
    //     const filtered = masterCopy.filter(b => b.price <= Math.ceil(value / 100));
    //     setBooks({
    //         showBooks: filtered,
    //         masterBooks: masterCopy
    //     })
    //     // setBooks(prevState => {
    //     //     return {
    //     //         ...prevState,
    //     //         showBooks: filtered
    //     //     };
    //     // });
    // }




    return (
        <Books.Provider value={books}>
            <div className="App col top">
                <div className="books">
                    <h1>Knygynas</h1>

                    {/* <div className="books__price-slider">
                        <div className="books__price-slider__value">
                            Max kaina: {(singleSlider / 100).toFixed(2)} Eur
                        </div>
                        <Slider min={singleSliderMinMax.min}
                            max={singleSliderMinMax.max}
                            value={singleSlider}
                            onChange={onSingleSliderChange} />
                    </div> */}

                    <div className="books__price-slider">
                        <div className="books__price-slider__value">
                            <span>Min kaina: {(Math.min(singleRange[0], singleRange[1]) / 100).toFixed(2)} Eur</span>
                            <span>Max kaina: {(Math.max(singleRange[0], singleRange[1]) / 100).toFixed(2)} Eur</span>
                        </div>
                        <Range min={singleRangeMinMax.min}
                            max={singleRangeMinMax.max}
                            value={singleRange}
                            onChange={onSingleRangeChange} />
                    </div>



                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<List></List>}></Route>
                            <Route path="/book/:id" element={<Book></Book>}></Route>
                            <Route path="*" element={<NotFound></NotFound>}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </Books.Provider>
    )
}

export default App;