const getstoreJoBApplication = () => {
    const storeJobApplication = localStorage.getItem('job-application');
    if (storeJobApplication) {
        return JSON.parse(storeJobApplication);
    }
    return []
}

const saveJobApplication = id => {
    const storeJobApplications = getstoreJoBApplication();
    const exists = storeJobApplications.find(JobId => JobId === id)
    if (!exists) {
        storeJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storeJobApplications));


    }

}

export { saveJobApplication, getstoreJoBApplication }