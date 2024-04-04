import { useState } from 'react';

// import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// import { useRouter } from 'src/routes/hooks';

import { account } from 'src/_mock/account';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AccountPopover() {
  // const router = useRouter();
  const [open, setOpen] = useState(null);
  
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  return (
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>
  );
}
