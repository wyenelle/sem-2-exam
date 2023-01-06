import React from 'react'

const RepoProfile = () => {
    const styles = {
        borderRadius: '50%'
    }
  return (
    <section className='w-full px-3 py-3'>
{/* Photo and name  */}
        <div className="grid grid-cols-4">
            <div className="col-span-1 ">
                <div style={styles} className="photo border-4 mx-auto w-20  h-20">

                </div>
            </div>
            <div className="col-span-3 w-full h-full">
                <div className="repo-name flex flex-col h-full justify-center w-full ">
                <h1 className='font-extrabold  text-xl'> Timothy Favour</h1>
                <h3 className="text-gray">
                    wyenelle
                </h3>
                </div>
            </div>
        </div>
{/* photo and name ends */}

    </section>
  )
}

export default RepoProfile