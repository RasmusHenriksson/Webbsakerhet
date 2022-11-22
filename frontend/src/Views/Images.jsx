import {useState} from 'react'
import axios from 'axios'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../components/Loading'

const Images = () => {
    const defaultImgSrc = './assets/IMG.jpg'

    const [imageSrc, setImageSrc] = useState(defaultImgSrc)
    const [data, setData] = useState();
    const [imageUrl, setImageUrl] = useState(null)


const setImage = e => {
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = x => {
        setImageSrc(x.target.result)
    }

    setData( e.target.files[0] )
}

const handleSubmit = async (e) => {
e.preventDefault()
const formData = new FormData()
formData.append("file", data)

const token = localStorage.getItem('accessToken')
const res = await axios.post('https://localhost:7272/api/Upload', formData, {
    headers: {
        'authorization': `Bearer ${token}`
    }
})
console.log(res);
setImageUrl(res.data);

}

  return (
    <div className='welcome'> Here you can upload your images to our database where we can share them with eachother!
    <div className='image-wrapper'>
        <div className="card">
            <div className="img-container">
                <img src={imageSrc} alt="" />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="file" accept='image/*' className='file-input' onChange={setImage} />
                <button className='btn-image'>Upload Image</button>
            </form>
        </div>

        {   imageUrl &&
            <div className='card'>
                <div className="img-container">
                <img src={imageUrl} alt="" />
            </div>
            </div>
            
        }
</div>
    </div>
  )
}

export default withAuthenticationRequired(Images, {
    onRedirecting: () => <Loading />
  })