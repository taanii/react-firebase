import React from 'react'
import { Fragment } from 'react'

function AddText() {
    return (
        <>
            <br />
            <h1 className="h1 mb-3">Add Text</h1><br />
            <div className='container'>
                <div class="mb-3">
                    <form action="">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button className='btn btn-lg btn-primary m-3'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddText