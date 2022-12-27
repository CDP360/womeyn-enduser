import React from 'react'
import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken';
function middlewares(req) {
    const { cookies } = req;
    const checkvalue = cookies.nextauth;
    const secret = "kalai";
    const url = req.url;
    if (url.includes("http://localhost:3000/")) {
        if (checkvalue === undefined) {
            return NextResponse.redirect("/login")
        }
        try {
            verify(checkvalue, secret);
            return NextResponse.next();
        }
        catch (err) {
            return NextResponse.redirect("/login");
        }

    }
}

export default middlewares