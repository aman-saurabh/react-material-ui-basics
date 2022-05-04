import React from 'react'
import { Button, styled, Typography } from "@mui/material";
import { AccessibilityNew, Accessible, Add, Settings } from "@mui/icons-material";
/*
    Created this component to just explore basic features of MUI
    It is not used in the project.
*/

const PinkButton = styled(Button)({
    backgroundColor: "#ff36bf",
    color: "white",
    "&:hover": {
        backgroundColor: "#eb2faf"
    },
    fontWeight: "bold",
    margin: "5px",
    padding: "5px 10px"
});

const ThemeButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.myCustomColor.light,
    color: "white",
    "&:hover": {
        backgroundColor: theme.palette.myCustomColor.main,
    },
    fontWeight: "bold",
    margin: "5px",
    padding: "5px 10px"
}));

const MuiBasics = () => {
    return (
        <div>
            <Button variant="text" size="small">Text</Button>
            <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Settings</Button>
            <Button startIcon={<Add />} variant="contained" color="success" size="small">Add new post</Button>
            <Button variant="outlined" size="small">Outlined</Button>
            {/*
                It will create a 'p' tag but style will look like h1.
                If you want h1 tag itself with it's own design then simply remove "component" attribute.
                And if you want p tag with it's own design then simply change "variant='p'" attribute 
                and omit "component" attribute. 
            */}
            <Typography variant="h1" component="p">
                It uses h1 style but it's a p tag.
            </Typography>
            <Button variant='contained' disabled={false} sx={{
                backgroundColor: "#fc0345",
                color: "white",
                "&:hover": {
                    backgroundColor: "#e30505"
                },
                "&:disabled": {
                    backgroundColor: "#cc6a6a",
                    color: "white"
                },
                fontWeight: "bold",
                margin: "5px",
                padding: "5px 10px"
            }} size="small">Custom Button</Button>
            <br />
            {/* 
                But what if we want multiple buttons with same design, In such cases instead of 
                using Button component multiple times and writing same custom design again and again 
                in every button, We can create a custom Button component and define desired design there
                and use that component instead of Button component wherever needed. Like we created 
                'PinkButton' component above with desired custom design and now we will create 2 button 
                with that component.   
            */}
            <PinkButton startIcon={<AccessibilityNew />} size='small'>First Pink Button</PinkButton>
            <PinkButton startIcon={<Accessible />} size='small'>Second Pink Button</PinkButton>
            <ThemeButton size='small'>Custome Theme button</ThemeButton>
        </div>
    )
}

export default MuiBasics