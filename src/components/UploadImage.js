import { getStorage, ref } from 'firebase/storage';
import { useUploadFile, useDownloadURL } from 'react-firebase-hooks/storage';
import { firebase } from "../utils/firebase/index"
import { useState } from 'react';
import "../assets/style.css"

const app = firebase;
const storage = getStorage(app);
const refx = ref;

const UploadImage = () => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [fileName, setFileName] = useState('abc');
  const ref = refx(storage, fileName);
  const [selectedFile, setSelectedFile] = useState();
  const [value, loading, err] = useDownloadURL(refx(storage, fileName))
  //this fileName variable is constantly updated when you change your fileName input
  const upload = async () => {
    if (selectedFile) {
      const result = await uploadFile(ref, selectedFile, {
        contentType: 'image/jpeg'
      });
      console.log(snapshot)
      // alert(`Result: ${JSON.stringify(result)}`);
    }
  }
  function handleUpload() {
    upload.then(() => {
      //todo- set alt fileName variable to (fileName)
    })
  }
  return (
    <div>
      <div className='container'>
        {error && <strong>Error: {error.message}</strong>}
        {uploading && <span>Uploading file...</span>}
        {selectedFile && <span>Selected file: {selectedFile.name}</span>}
        <br />
        <h1 className="h1 mb-3">Image Uploader</h1><br />
        <div className="row">
          {/* <div className="col-md-4 my-2">
                <input type='text'
                    placeholder='fileName'
                    className="form-control"
                    onChange={e => setFileName(e.target.value)} />
                </div> */}
          <div className="col-md-6 my-2">
            <input
              className='form-control m-2'
              type="file"
              name='upload'
              onChange={(e) => {
                const file = e.target.files ? e.target.files[0] : undefined;
                setSelectedFile(file);
              }}
            />
          </div>
          <div className="col-md-6 my-2">
            <button className='btn btn-primary' onClick={upload}>Upload file</button>
          </div>
        </div>

        <div>
          <p>
            {err && <strong>Error: {err}</strong>}
            {loading && <span>Download URL: Loading...</span>}
            {!loading && value && (
              <>
                <div className='imp-upload'>
                  <center>
                    <img className='img-upload' alt="image" src={value} />
                  </center>
                </div>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UploadImage