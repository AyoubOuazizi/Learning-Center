"use client"
import {useState} from 'react'

export default function FaqCard({openVal = false}) {
    const [open, setOpen] = useState(openVal)

  return (
    <div className="card m-2" style={{boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.10)", border: open? "1px solid #E95D40":"none"}}>
        <div className="card-body">
        <div className="d-flex d-row justify-content-between align-items-center py-2">
            <h5 className="card-title w-75 text-start m-0" style={{color: "#170F49", fontWeight: 700, fontSize: 18}}>Comment fonctionne votre programme?</h5>
            <button className="btn btn-success my-2 my-sm-0 rounded mx-2 p-1 border-0 float-end" type="button" style={{"width": 35,"height": 35,"background":"rgba(233, 93, 64, 0.10)", color: "#E95D40", fontSize: 30, fontWeight: 700, lineHeight: 1, display: open? "none": ""}} onClick={() => {setOpen(true)}}>+</button>
            <button className="btn btn-success my-2 my-sm-0 rounded mx-2 p-1 border-0 float-end" type="button" style={{"width": 35,"height": 35,"background":"#F84525", fontSize: 30, fontWeight: 700, lineHeight: 0, display: open?"" : "none"}} onClick={() => {setOpen(false)}}>-</button>
        </div>
        <p className="pt-2 text-start" style={{fontSize: 13, color: "#6F6C90", display: open?"" : "none"}}>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
        </div>
    </div>
)
}
