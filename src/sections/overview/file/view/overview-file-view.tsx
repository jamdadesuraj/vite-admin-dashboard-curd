import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _files, _folders } from 'src/_mock';

import Scrollbar from 'src/components/scrollbar';
import { useSettingsContext } from 'src/components/settings';

import FileRecentItem from '../../../file-manager/file-recent-item';
import FileManagerPanel from '../../../file-manager/file-manager-panel';
import FileStorageOverview from '../../../file-manager/file-storage-overview';
import FileManagerFolderItem from '../../../file-manager/file-manager-folder-item';
import FileManagerNewFolderDialog from '../../../file-manager/file-manager-new-folder-dialog';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

// ----------------------------------------------------------------------

export default function OverviewFileView() {
  const smDown = useResponsive('down', 'sm');

  const settings = useSettingsContext();

  const [folderName, setFolderName] = useState('');

  const newFolder = useBoolean();

  const upload = useBoolean();

  const handleChangeFolderName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  }, []);

  const handleCreateNewFolder = useCallback(() => {
    newFolder.onFalse();
    setFolderName('');
    console.info('CREATE NEW FOLDER');
  }, [newFolder]);

  const renderStorageOverview = (
    <FileStorageOverview
      total={GB}
      chart={{
        series: 76,
      }}
      data={[
        {
          name: 'Images',
          usedStorage: GB / 2,
          filesCount: 223,
          icon: <Box component="img" src="/assets/icons/files/ic_img.svg" />,
        },
        {
          name: 'Media',
          usedStorage: GB / 5,
          filesCount: 223,
          icon: <Box component="img" src="/assets/icons/files/ic_video.svg" />,
        },
        {
          name: 'Documents',
          usedStorage: GB / 5,
          filesCount: 223,
          icon: <Box component="img" src="/assets/icons/files/ic_document.svg" />,
        },
        {
          name: 'Other',
          usedStorage: GB / 10,
          filesCount: 223,
          icon: <Box component="img" src="/assets/icons/files/ic_file.svg" />,
        },
      ]}
    />
  );

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {smDown && <Grid xs={12}>{renderStorageOverview}</Grid>}

          <Grid xs={12} md={12} lg={12}>
            <div>
              <FileManagerPanel
                title="Folders"
                link={paths.dashboard.fileManager}
                onOpen={newFolder.onTrue}
                sx={{ mt: 5 }}
              />

              <Scrollbar>
                <Stack direction="row" spacing={3} sx={{ pb: 3 }}>
                  {_folders.map((folder) => (
                    <FileManagerFolderItem
                      key={folder.id}
                      folder={folder}
                      onDelete={() => console.info('DELETE', folder.id)}
                      sx={{
                        ...(_folders.length > 3 && {
                          minWidth: 222,
                        }),
                      }}
                    />
                  ))}
                </Stack>
              </Scrollbar>

              <FileManagerPanel
                title="Recent Files"
                link={paths.dashboard.fileManager}
                onOpen={upload.onTrue}
                sx={{ mt: 2 }}
              />

              <Stack spacing={2}>
                {_files.slice(0, 5).map((file) => (
                  <FileRecentItem
                    key={file.id}
                    file={file}
                    onDelete={() => console.info('DELETE', file.id)}
                  />
                ))}
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Container>

      <FileManagerNewFolderDialog open={upload.value} onClose={upload.onFalse} />

      <FileManagerNewFolderDialog
        open={newFolder.value}
        onClose={newFolder.onFalse}
        title="New Folder"
        folderName={folderName}
        onChangeFolderName={handleChangeFolderName}
        onCreate={handleCreateNewFolder}
      />
    </>
  );
}
