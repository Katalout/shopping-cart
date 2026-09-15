import styles from "./Shopping.module.css";
import { useOutletContext, useParams } from "react-router";
import { useRef, useEffect, useState, useCallback } from "react";
import Card from "../Card/Card";
import ErrorPage from "../ErrorPage/ErrorPage";


export default function Shopping() {
    const { products, error, loading, nav } = useOutletContext();
    const jeweleryRef = useRef(null);
    const electronicsRef = useRef(null);
    const { scroll } = useParams();


    useEffect(() => {
        if (!loading && !error) {
            if (jeweleryRef.current && (scroll === "jewelery")) {
                window.scrollTo({
                    top: jeweleryRef.current.offsetTop - nav.current.offsetHeight,
                })
            }
            if (electronicsRef.current && (scroll === "electronics")) {
                window.scrollTo({
                    top: electronicsRef.current.offsetTop - nav.current.offsetHeight,
                })
            };
        }
    }, []);


    if (loading) return (
        <ErrorPage error="loading prod" />
    )
    if (error) return (
        <ErrorPage error="loading err" />
    )

    return (
        <>
            <section >
                {/*  <p className="sectionLabel">Collection</p> */}
                <h2 id="clothing" className="sectionLabel shopping" >Clothing</h2>
                <div
                    className={styles.cardContainer}>
                    {products
                        .filter(item => item.category.includes("clothing"))
                        .map(item =>
                            <Card key={item.id} data={item} inCart={false} />)
                    }
                </div>
            </section>
            <section ref={jeweleryRef}>
                <h2 id="jewelery" className="sectionLabel shopping" >Jewelery</h2>
                <div className={styles.cardContainer}>{products.filter(item => item.category === "jewelery").map(item => <Card key={item.id} data={item} inCart={false} />)}
                </div>
            </section>
            <section ref={electronicsRef}>
                <h2 className="sectionLabel shopping" >Electronics</h2>
                <div className={styles.cardContainer}>{products.filter(item => item.category === "electronics").map(item => <Card key={item.id} data={item} inCart={false} />)}
                </div>
            </section >
        </>
    )
}