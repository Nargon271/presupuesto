export const checkBudget = (budget, difference) => {
    let clase

    if ((budget / 4) > difference) {
        clase = "alert alert-danger"
    } else if ((budget / 2) > difference) {
        clase = "alert alert-warning"
    } else {
        clase = "alert alert-success"
    }
    return clase
}