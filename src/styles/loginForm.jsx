import { Paper, styled, TextField, Button, Box } from "@mui/material";

export const CunstomForm = styled('form')`
    display: flex;
    width: 100vw;
    hight: 100vh;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
`

export const CunstomDiv = styled(Box)`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 17vw;
`


export const CunstomPaper = styled(Paper)`
    display: flex;
    width: 30rem;
    height: 35rem;
    flex-direction: column;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #D3D3D3;
`

export const CunstomField = styled(TextField)`
    display: flex;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`

export const CunstomButton = styled(Button)`
    display: flex;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    width: 14.5rem;
`

export const CunstomBox = styled(Box)`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #A9A9A9;
`

export const ChartBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #A9A9A9;
`