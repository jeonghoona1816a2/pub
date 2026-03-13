import { useEffect, useState } from "react"
import styles from "./Asyncawaittest.module.scss";
export default function Asyncawaittest() {

    const levelOptions = [
        { value: "Beginner", label: "Beginner" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Advanced", label: "Advanced" },
    ];
    const initialSkill = {
        name: '',
        lastUsed: '',
        level: '',
        years: '',
        category: '',
    }
    const yearsnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const API_URL = `${import.meta.env.VITE_API_BASE_URL}/skills`;
    const [data, setData] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newSkill, setNewSkill] = useState(initialSkill);
    const [patchSkill, setPatchSkill] = useState(initialSkill);
    const [showpatchForm, setShowpatchForm] = useState(false);
    const [editingId, setEditingId] = useState(null)


    async function getSKill() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {

                console.log('get 실패 status', response.status);
                const text = await response.text();
                console.log('get 실패 body', text);
                throw new Error('sever error');
            }
            const result = await response.json();
            setData(result)
            console.log(result)
        }
        catch (e) { console.log(e) }
    }

    useEffect(() => {
        getSKill();
    }, [])


    async function createSkill() {
        const payload = {
            ...newSkill,
            years: Number(newSkill.years)
        }

        console.log("보내는 데이터", payload);
        try {
            const response = await fetch(API_URL, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('server error')
            };
            console.log('post ok')
            await getSKill();
            setNewSkill(initialSkill);
            setShowAddForm(false);
        }
        catch (e) {
            console.log(e)
        }

    }
    async function deleteSkill(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                console.log('get 실패 status', response.status);
                const text = await response.text();
                console.log('get 실패 body', text);
                throw new Error('sever error');
            };
            console.log('delede ok')
            await getSKill();

        }
        catch (e) {
            console.log(e)
        }
    }


    async function patchskill(id) {
        const payload = {
            ...patchSkill,
            years: Number(patchSkill.years)
        }
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)

            });
            if (!response.ok) {
                console.log('get 실패 status', response.status);
                const text = await response.text();
                console.log('get 실패 body', text);
                throw new Error('sever error');
            }
            await getSKill();
            setEditingId(null);
            setPatchSkill(initialSkill);
        }
        catch (e) {
            console.error(e)
        }

    }


    return (
        <section className="py-12 bg-surface">
            Asyncawaittest
            <div className={styles.addselet}>  <button onClick={() => setShowAddForm(prev => !prev)}> 추가
            </button>
                {showAddForm && (
                    <div>
                        <input onChange={(e) => { setNewSkill({ ...newSkill, category: e.target.value }) }}
                            placeholder="category" value={newSkill.category} />

                        <input onChange={(e) => { setNewSkill({ ...newSkill, lastUsed: e.target.value }) }}
                            placeholder="lastUsed" value={newSkill.lastUsed} />

                        <select onChange={(e) => { setNewSkill({ ...newSkill, level: e.target.value }) }}
                            placeholder="years" value={newSkill.level} >
                            <option value="">선택</option>
                            {levelOptions.map(level => (
                                <option key={level.value} value={level.value}>{level.label}</option>
                            ))}
                        </select>

                        <input onChange={(e) => { setNewSkill({ ...newSkill, name: e.target.value }) }}
                            placeholder="name" value={newSkill.name} />

                        <select onChange={(e) => { setNewSkill({ ...newSkill, years: e.target.value }) }}
                            placeholder="years" value={newSkill.years} >
                            <option value="">선택</option>
                            {yearsnum.map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}


                        </select>
                        <button onClick={createSkill}>완료</button>
                    </div>
                )}

            </div>
            <div className={styles.container}>
                {data.map(skill =>
                (
                    <div className={styles.list} key={skill.id} >
                        <div className={styles.item}>{skill.id}</div>
                        <div className={styles.item}>
                            {editingId === skill.id ? (<input onChange={(e) => { setPatchSkill({ ...patchSkill, category: e.target.value }) }} value={patchSkill.category} />)
                                :
                                (skill.category)
                            }
                        </div>
                        <div className={styles.item}>
                            {editingId === skill.id ? (<input onChange={(e) => { setPatchSkill({ ...patchSkill, lastUsed: e.target.value }) }} value={patchSkill.lastUsed} />)
                                :
                                (skill.lastUsed)
                            }
                        </div>
                        <div className={styles.item}>
                            {editingId === skill.id ? (<input onChange={(e) => { setPatchSkill({ ...patchSkill, level: e.target.value }) }} value={patchSkill.level} />)
                                :
                                (skill.level)
                            }
                        </div>
                        <div className={styles.item}>
                            {editingId === skill.id ? (<input onChange={(e) => { setPatchSkill({ ...patchSkill, name: e.target.value }) }} value={patchSkill.name} />)
                                :
                                (skill.name)
                            }
                        </div>
                        <div className={styles.item}>
                            {editingId === skill.id ? (<input onChange={(e) => { setPatchSkill({ ...patchSkill, years: e.target.value }) }} value={patchSkill.years} />)
                                :
                                (skill.years)
                            }
                        </div>
                        <div className={styles.item}> <button onClick={() => {
                            setEditingId(skill.id);
                            setPatchSkill(
                                {
                                    name: skill.name,
                                    lastUsed: skill.lastUsed,
                                    level: skill.level,
                                    years: skill.years,
                                    category: skill.category,
                                }
                            );
                        }} >
                            {/* {editingId === skill.id ? 닫기 : 수정} */} 수정
                        </button>
                            <button>취소 </button>
                            <button onClick={() => patchskill(skill.id)}>완료</button></div>
                        <div className={styles.item}> <button onClick={() => { deleteSkill(skill.id) }} >삭제</button></div>
                    </div>
                )
                )}
            </div>

        </section >
    )
}
