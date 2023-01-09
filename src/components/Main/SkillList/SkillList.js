import SkillItem from "../SkillItem/SkillItem"
import './SkillList.css'
import  htmlImg from '../Image/image1.png'
import cssImg from '../Image/image2.png'
import jsImg from '../Image/image3.png'
import reactImg from '../Image/image4.png'

let data = [
    {id: 1, title: 'HTML', url:htmlImg, count_stars: 3},
    {id: 2, title: 'CSS', url:cssImg, count_stars: 2},
    {id: 3, title: 'JS', url: jsImg, count_stars: 3},
    {id: 4, title: 'React', url:reactImg, count_stars: 3},
]


function SkillList(){
    return (
        <div className="skill_wrapper">
            {data.map(elem => 
                <SkillItem 
                    title = {elem.title} 
                    url = {elem.url} 
                    count_stars = {elem.count_stars}
                    key = {elem.id}
                />
            )}
        </div>
    )
}

export default SkillList