<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';}m^WJ5H0bz#pTpDR,ei:?KG@8A}^jR~jwXRU9JB}Z]n(LHebK);:cD:Ro6qNFj:' );
define( 'SECURE_AUTH_KEY',  '&Im|0e.f%bCU.tbi`-FNqZDM][)JYiBp|g?6j,Ic~C ELauF]0pup6.GR)?>oXb=' );
define( 'LOGGED_IN_KEY',    'R<r]ieexu8Yd{1dv<0]pWQuH.=->=Fd)Qg!}cO/Jf-@y-e}8F:Q0lRs6zM5E5(y%' );
define( 'NONCE_KEY',        '-KA%}&yQLj;0`nFt;&{cDo$`y22JJm_Utwz@Lp%{fy@/5krF492o8[ZIW*P1FPqS' );
define( 'AUTH_SALT',        'YE=ofru<yMEy%2QXz e*{D<O*6-qDO4doYJM{@2bQ@^PY/JczT$&mP5l`0cv{G!I' );
define( 'SECURE_AUTH_SALT', 'bK0p4[k^h.)u7S[=,!GnfT;_lrD<xT ;g %|i}41Jtt4WSQjmebR|I=1j |3&rJ)' );
define( 'LOGGED_IN_SALT',   '/x%C+_$=D<~UT5H[v^D3x5U[;Opw[cuEb6T-n<6A:JF|FwW^-muH%uY{!hZhwqut' );
define( 'NONCE_SALT',       '/(d)Tc~AycL]@(D^~fauO<y+G>wo%]icwx&0N7]JtabEeVMc1>{}qO0FA~H%g;v(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
