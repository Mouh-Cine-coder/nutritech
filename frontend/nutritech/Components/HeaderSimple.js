import { useState } from 'react';
import cx from 'clsx';
import { Container, Group, Burger, Menu, UnstyledButton, Avatar, rem, useMantineTheme, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
} from '@tabler/icons-react';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];
const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export function HeaderSimple() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = links.map((link) => (
    <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        }}
    >
        {link.label}
    </a>
    ));

    return (
    <header className={classes.header}>
        <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
            {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
            >
            <Menu.Target>
                <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                >
                <Group gap={7}>
                    <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                    <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                    </Text>
                    <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                leftSection={
                    <IconHeart
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                    />
                }
                >
                Liked posts
                </Menu.Item>
                <Menu.Item
                leftSection={
                    <IconStar
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                    />
                }
                >
                Saved posts
                </Menu.Item>
                <Menu.Item
                leftSection={
                    <IconMessage
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                    />
                }
                >
                Your comments
                </Menu.Item>

                <Menu.Label>Settings</Menu.Label>
                <Menu.Item
                leftSection={
                    <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
                >
                Account settings
                </Menu.Item>
                <Menu.Item
                leftSection={
                    <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
                >
                Change account
                </Menu.Item>
                <Menu.Item
                leftSection={
                    <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
                >
                Logout
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                leftSection={
                    <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
                >
                Pause subscription
                </Menu.Item>
                <Menu.Item
                color="red"
                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                >
                Delete account
                </Menu.Item>
            </Menu.Dropdown>
            </Menu>
        </Container>

    </header>
    );
}