import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Box, typography } from '@mui/system'

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled(props => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>DAILY</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              SPORT SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              RUNNING SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              HOCKEY SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              SKI SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              FLIGHT SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              HIKING SOCKS
            </Link>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography>SPORTS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              SPORT SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              RUNNING SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              HOCKEY SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              SKI SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              FLIGHT SOCKS
            </Link>
          </Box>
          <Box
            sx={{
              display: 'block',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
            }}
          >
            <Link
              color='ButtonText'
              underline='hover'
              component='button'
              variant='body2'
              onClick={() => {
                console.info("I'm a button.")
              }}
            >
              HIKING SOCKS
            </Link>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}


