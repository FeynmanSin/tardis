import React, { useState, useEffect } from 'react';

export const useIntersectionObserver = async (ref) => {
    useEffect(() => {
        if (ref.current) {
            console.log('><<>>>ref', ref)
            const intersectionObserver = new IntersectionObserver((entries) => {
                console.log('>>>>entries', entries);
            }, {
                root: ref.current,
                threshold: 0
            });
            ref.current.childNodes.forEach(el => {
                intersectionObserver.observe(el);
            })
        }

    }, [ref]);
}
