-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 03, 2026 at 11:01 AM
-- Server version: 8.0.46-0ubuntu0.24.04.2
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts_user`
--

CREATE TABLE `accounts_user` (
  `id` bigint NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` longtext NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `pincode` varchar(20) NOT NULL,
  `is_blocked` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `accounts_user`
--

INSERT INTO `accounts_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `is_staff`, `is_active`, `date_joined`, `full_name`, `email`, `phone_number`, `address`, `city`, `state`, `country`, `pincode`, `is_blocked`, `created_at`, `updated_at`) VALUES
(1, 'pbkdf2_sha256$1200000$3KBzeiOfB81h78j80XGRXD$UFayIQsgytLp9+GX8atPQldQYV4XVPhdT549BqrrF6E=', '2026-07-01 14:34:42.425452', 1, 'admin', '', '', 1, 1, '2026-06-26 10:56:02.064425', '', 'admin@admin.com', NULL, '', '', '', '', '', 0, '2026-06-26 10:56:03.172096', '2026-06-26 10:56:03.172120'),
(2, 'pbkdf2_sha256$1200000$0FG9L5Yq87JCA0pa1QWnP0$rKhzkBy2ufA8KNBP1gHnuGbvFRQGtN4nvVHbbq4sOHI=', NULL, 0, 'sujoygaraikolkata@gmail.com', '', '', 0, 1, '2026-06-29 13:14:06.978880', 'sujoy garai', 'sujoygaraikolkata@gmail.com', '123456789', '', '', '', '', '', 0, '2026-06-29 13:14:08.284353', '2026-06-30 18:07:03.094723');

-- --------------------------------------------------------

--
-- Table structure for table `accounts_user_groups`
--

CREATE TABLE `accounts_user_groups` (
  `id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accounts_user_user_permissions`
--

CREATE TABLE `accounts_user_user_permissions` (
  `id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 3, 'add_permission'),
(6, 'Can change permission', 3, 'change_permission'),
(7, 'Can delete permission', 3, 'delete_permission'),
(8, 'Can view permission', 3, 'view_permission'),
(9, 'Can add group', 2, 'add_group'),
(10, 'Can change group', 2, 'change_group'),
(11, 'Can delete group', 2, 'delete_group'),
(12, 'Can view group', 2, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add banner', 6, 'add_banner'),
(22, 'Can change banner', 6, 'change_banner'),
(23, 'Can delete banner', 6, 'delete_banner'),
(24, 'Can view banner', 6, 'view_banner'),
(25, 'Can add user', 7, 'add_user'),
(26, 'Can change user', 7, 'change_user'),
(27, 'Can delete user', 7, 'delete_user'),
(28, 'Can view user', 7, 'view_user'),
(29, 'Can add category', 8, 'add_category'),
(30, 'Can change category', 8, 'change_category'),
(31, 'Can delete category', 8, 'delete_category'),
(32, 'Can view category', 8, 'view_category'),
(33, 'Can add product', 9, 'add_product'),
(34, 'Can change product', 9, 'change_product'),
(35, 'Can delete product', 9, 'delete_product'),
(36, 'Can view product', 9, 'view_product'),
(37, 'Can add product image', 10, 'add_productimage'),
(38, 'Can change product image', 10, 'change_productimage'),
(39, 'Can delete product image', 10, 'delete_productimage'),
(40, 'Can view product image', 10, 'view_productimage'),
(41, 'Can add cart', 11, 'add_cart'),
(42, 'Can change cart', 11, 'change_cart'),
(43, 'Can delete cart', 11, 'delete_cart'),
(44, 'Can view cart', 11, 'view_cart'),
(45, 'Can add cart item', 12, 'add_cartitem'),
(46, 'Can change cart item', 12, 'change_cartitem'),
(47, 'Can delete cart item', 12, 'delete_cartitem'),
(48, 'Can view cart item', 12, 'view_cartitem'),
(49, 'Can add wishlist', 13, 'add_wishlist'),
(50, 'Can change wishlist', 13, 'change_wishlist'),
(51, 'Can delete wishlist', 13, 'delete_wishlist'),
(52, 'Can view wishlist', 13, 'view_wishlist'),
(53, 'Can add shipping address', 14, 'add_shippingaddress'),
(54, 'Can change shipping address', 14, 'change_shippingaddress'),
(55, 'Can delete shipping address', 14, 'delete_shippingaddress'),
(56, 'Can view shipping address', 14, 'view_shippingaddress'),
(57, 'Can add order', 15, 'add_order'),
(58, 'Can change order', 15, 'change_order'),
(59, 'Can delete order', 15, 'delete_order'),
(60, 'Can view order', 15, 'view_order'),
(61, 'Can add order item', 16, 'add_orderitem'),
(62, 'Can change order item', 16, 'change_orderitem'),
(63, 'Can delete order item', 16, 'delete_orderitem'),
(64, 'Can view order item', 16, 'view_orderitem'),
(65, 'Can add brand', 17, 'add_brand'),
(66, 'Can change brand', 17, 'change_brand'),
(67, 'Can delete brand', 17, 'delete_brand'),
(68, 'Can view brand', 17, 'view_brand'),
(69, 'Can add coupon', 18, 'add_coupon'),
(70, 'Can change coupon', 18, 'change_coupon'),
(71, 'Can delete coupon', 18, 'delete_coupon'),
(72, 'Can view coupon', 18, 'view_coupon');

-- --------------------------------------------------------

--
-- Table structure for table `banners_banner`
--

CREATE TABLE `banners_banner` (
  `id` bigint NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `image` varchar(100) NOT NULL,
  `button_text` varchar(100) NOT NULL,
  `button_link` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `order` int UNSIGNED NOT NULL,
  `created_at` datetime(6) NOT NULL
) ;

--
-- Dumping data for table `banners_banner`
--

INSERT INTO `banners_banner` (`id`, `title`, `subtitle`, `image`, `button_text`, `button_link`, `is_active`, `order`, `created_at`) VALUES
(1, '1', '', 'banners/slider-1_k5yfZ13.jpg', '', '', 1, 0, '2026-06-26 16:53:37.926806');

-- --------------------------------------------------------

--
-- Table structure for table `brands_brand`
--

CREATE TABLE `brands_brand` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `description` longtext NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `brands_brand`
--

INSERT INTO `brands_brand` (`id`, `name`, `slug`, `logo`, `description`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Intel', 'intel', 'brands/brand-1_HEELLyb.png', '', 1, '2026-06-30 17:38:14.764285', '2026-07-01 08:06:12.202152'),
(2, 'Nike', 'nike', 'brands/brand-2_1GijQTv.png', '', 1, '2026-06-30 17:38:40.224705', '2026-07-01 08:06:49.514322'),
(3, 'Dell', 'dell', 'brands/brand-3_3Du2ETr.png', '', 1, '2026-06-30 17:38:52.247656', '2026-07-01 08:07:38.947947'),
(4, 'Addidas', 'addidas', 'brands/brand-4_AYVAFff.png', '', 1, '2026-06-30 17:39:16.868350', '2026-07-01 08:07:07.566914'),
(5, 'Sumsung', 'sumsung', 'brands/brand-5_DbIRisZ.png', '', 1, '2026-07-01 08:05:52.066400', '2026-07-01 08:05:52.066441'),
(6, 'Puma', 'puma', 'brands/brand-6_oORehxq.png', '', 1, '2026-07-01 08:07:57.189653', '2026-07-01 08:07:57.189711');

-- --------------------------------------------------------

--
-- Table structure for table `cart_cart`
--

CREATE TABLE `cart_cart` (
  `id` bigint NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  `coupon_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart_cart`
--

INSERT INTO `cart_cart` (`id`, `created_at`, `updated_at`, `user_id`, `coupon_id`) VALUES
(1, '2026-06-29 13:14:23.388693', '2026-07-01 14:38:41.424548', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cart_cartitem`
--

CREATE TABLE `cart_cartitem` (
  `id` bigint NOT NULL,
  `quantity` int UNSIGNED NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `cart_id` bigint NOT NULL,
  `product_id` bigint NOT NULL
) ;

--
-- Dumping data for table `cart_cartitem`
--

INSERT INTO `cart_cartitem` (`id`, `quantity`, `created_at`, `cart_id`, `product_id`) VALUES
(23, 1, '2026-07-02 07:15:15.124547', 1, 1),
(24, 1, '2026-07-02 07:15:18.530455', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `catalog_category`
--

CREATE TABLE `catalog_category` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` longtext,
  `image` varchar(100) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `catalog_category`
--

INSERT INTO `catalog_category` (`id`, `name`, `slug`, `description`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Men', 'men', '', '', 1, '2026-06-27 04:43:36.137162', '2026-06-27 04:43:36.137232'),
(2, 'Women', 'women', '', '', 1, '2026-07-01 08:08:26.172241', '2026-07-01 08:08:26.172274'),
(3, 'Baby', 'baby', '', '', 1, '2026-07-01 08:38:14.501222', '2026-07-01 08:38:14.501260');

-- --------------------------------------------------------

--
-- Table structure for table `checkout_shippingaddress`
--

CREATE TABLE `checkout_shippingaddress` (
  `id` bigint NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(254) NOT NULL,
  `address` longtext NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `pincode` varchar(20) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  `is_default` tinyint(1) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `checkout_shippingaddress`
--

INSERT INTO `checkout_shippingaddress` (`id`, `full_name`, `phone`, `email`, `address`, `city`, `state`, `country`, `pincode`, `created_at`, `user_id`, `is_default`, `updated_at`) VALUES
(1, 'sujoy garai', '123456789', 'sujoygaraikolkata@gmail.com', 'Toen school', 'kolkata', 'West Bengal', 'India', '700000', '2026-06-30 13:13:42.950936', 2, 1, '2026-06-30 13:14:30.264202');

-- --------------------------------------------------------

--
-- Table structure for table `coupons_coupon`
--

CREATE TABLE `coupons_coupon` (
  `id` bigint NOT NULL,
  `code` varchar(50) NOT NULL,
  `discount_percent` int UNSIGNED NOT NULL,
  `active` tinyint(1) NOT NULL,
  `valid_from` datetime(6) NOT NULL,
  `valid_to` datetime(6) NOT NULL,
  `created_at` datetime(6) NOT NULL
) ;

--
-- Dumping data for table `coupons_coupon`
--

INSERT INTO `coupons_coupon` (`id`, `code`, `discount_percent`, `active`, `valid_from`, `valid_to`, `created_at`) VALUES
(1, 'test', 2, 1, '2026-06-28 13:32:26.000000', '2026-07-19 00:00:00.000000', '2026-06-29 13:32:37.066840');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL
) ;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2026-06-26 16:53:37.929893', '1', '1', 1, '[{\"added\": {}}]', 6, 1),
(2, '2026-06-27 04:43:36.139874', '1', 'Men', 1, '[{\"added\": {}}]', 8, 1),
(3, '2026-06-27 04:44:22.798748', '1', 'Phasellus Gravida test', 1, '[{\"added\": {}}]', 9, 1),
(4, '2026-06-27 04:44:40.161182', '1', 'Phasellus Gravida test', 2, '[{\"added\": {\"name\": \"product image\", \"object\": \"Phasellus Gravida test\"}}]', 9, 1),
(5, '2026-06-29 13:32:37.068140', '1', 'test', 1, '[{\"added\": {}}]', 18, 1),
(6, '2026-06-29 14:14:55.136206', '1', 'test', 2, '[{\"changed\": {\"fields\": [\"Valid from\"]}}]', 18, 1),
(7, '2026-06-30 08:35:29.982214', '1', 'test', 2, '[{\"changed\": {\"fields\": [\"Valid to\"]}}]', 18, 1),
(8, '2026-06-30 08:39:41.354356', '1', 'test', 2, '[{\"changed\": {\"fields\": [\"Valid to\"]}}]', 18, 1),
(9, '2026-06-30 17:38:14.765285', '1', '1', 1, '[{\"added\": {}}]', 17, 1),
(10, '2026-06-30 17:38:40.226102', '2', '2', 1, '[{\"added\": {}}]', 17, 1),
(11, '2026-06-30 17:38:52.249397', '3', '3', 1, '[{\"added\": {}}]', 17, 1),
(12, '2026-06-30 17:39:16.870393', '4', '4', 1, '[{\"added\": {}}]', 17, 1),
(13, '2026-07-01 08:05:52.068158', '5', 'Sumsung', 1, '[{\"added\": {}}]', 17, 1),
(14, '2026-07-01 08:06:12.204362', '1', 'Intel', 2, '[{\"changed\": {\"fields\": [\"Name\", \"Slug\"]}}]', 17, 1),
(15, '2026-07-01 08:06:49.516279', '2', 'Nike', 2, '[{\"changed\": {\"fields\": [\"Name\", \"Slug\"]}}]', 17, 1),
(16, '2026-07-01 08:07:07.569211', '4', 'Addidas', 2, '[{\"changed\": {\"fields\": [\"Name\", \"Slug\"]}}]', 17, 1),
(17, '2026-07-01 08:07:38.949950', '3', 'Dell', 2, '[{\"changed\": {\"fields\": [\"Name\", \"Slug\"]}}]', 17, 1),
(18, '2026-07-01 08:07:57.191014', '6', 'Puma', 1, '[{\"added\": {}}]', 17, 1),
(19, '2026-07-01 08:08:26.173511', '2', 'Women', 1, '[{\"added\": {}}]', 8, 1),
(20, '2026-07-01 08:38:14.502357', '3', 'Baby', 1, '[{\"added\": {}}]', 8, 1),
(21, '2026-07-01 09:10:50.147905', '2', 'Phasellus Gravida', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"product image\", \"object\": \"Phasellus Gravida\"}}]', 9, 1),
(22, '2026-07-01 09:34:50.840821', '2', 'Phasellus Gravida', 2, '[{\"changed\": {\"name\": \"product image\", \"object\": \"Phasellus Gravida\", \"fields\": [\"Is primary\"]}}]', 9, 1),
(23, '2026-07-01 09:35:45.553064', '3', 'Santu Garai', 1, '[{\"added\": {}}, {\"added\": {\"name\": \"product image\", \"object\": \"Santu Garai\"}}]', 9, 1),
(24, '2026-07-01 09:36:06.782283', '3', 'Santu Garai', 2, '[{\"changed\": {\"name\": \"product image\", \"object\": \"Santu Garai\", \"fields\": [\"Image\"]}}]', 9, 1),
(25, '2026-07-01 09:38:23.180165', '1', 'Phasellus Gravida test', 2, '[{\"changed\": {\"fields\": [\"Description\", \"Short description\"]}}]', 9, 1),
(26, '2026-07-01 14:35:14.459889', '2', 'Phasellus Gravida', 2, '[{\"added\": {\"name\": \"product image\", \"object\": \"Phasellus Gravida\"}}]', 9, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(7, 'accounts', 'user'),
(1, 'admin', 'logentry'),
(2, 'auth', 'group'),
(3, 'auth', 'permission'),
(6, 'banners', 'banner'),
(17, 'brands', 'brand'),
(11, 'cart', 'cart'),
(12, 'cart', 'cartitem'),
(8, 'catalog', 'category'),
(14, 'checkout', 'shippingaddress'),
(4, 'contenttypes', 'contenttype'),
(18, 'coupons', 'coupon'),
(15, 'orders', 'order'),
(16, 'orders', 'orderitem'),
(9, 'products', 'product'),
(10, 'products', 'productimage'),
(5, 'sessions', 'session'),
(13, 'wishlist', 'wishlist');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2026-06-26 10:51:07.694378'),
(2, 'contenttypes', '0002_remove_content_type_name', '2026-06-26 10:51:07.808131'),
(3, 'auth', '0001_initial', '2026-06-26 10:51:08.228023'),
(4, 'auth', '0002_alter_permission_name_max_length', '2026-06-26 10:51:08.311637'),
(5, 'auth', '0003_alter_user_email_max_length', '2026-06-26 10:51:08.325842'),
(6, 'auth', '0004_alter_user_username_opts', '2026-06-26 10:51:08.340867'),
(7, 'auth', '0005_alter_user_last_login_null', '2026-06-26 10:51:08.355657'),
(8, 'auth', '0006_require_contenttypes_0002', '2026-06-26 10:51:08.360093'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2026-06-26 10:51:08.371900'),
(10, 'auth', '0008_alter_user_username_max_length', '2026-06-26 10:51:08.387891'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2026-06-26 10:51:08.400992'),
(12, 'auth', '0010_alter_group_name_max_length', '2026-06-26 10:51:08.426502'),
(13, 'auth', '0011_update_proxy_permissions', '2026-06-26 10:51:08.436990'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2026-06-26 10:51:08.450098'),
(15, 'accounts', '0001_initial', '2026-06-26 10:51:08.923684'),
(16, 'admin', '0001_initial', '2026-06-26 10:51:09.147397'),
(17, 'admin', '0002_logentry_remove_auto_add', '2026-06-26 10:51:09.173344'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2026-06-26 10:51:09.204168'),
(19, 'banners', '0001_initial', '2026-06-26 10:51:09.242258'),
(20, 'brands', '0001_initial', '2026-06-26 10:51:09.287689'),
(21, 'catalog', '0001_initial', '2026-06-26 10:51:09.332262'),
(22, 'products', '0001_initial', '2026-06-26 10:51:09.573174'),
(23, 'cart', '0001_initial', '2026-06-26 10:51:09.959931'),
(24, 'checkout', '0001_initial', '2026-06-26 10:51:10.112048'),
(25, 'coupons', '0001_initial', '2026-06-26 10:51:10.149162'),
(26, 'orders', '0001_initial', '2026-06-26 10:51:10.596244'),
(27, 'products', '0002_alter_product_brand', '2026-06-26 10:51:11.005410'),
(28, 'sessions', '0001_initial', '2026-06-26 10:51:11.059485'),
(29, 'wishlist', '0001_initial', '2026-06-26 10:51:11.305438'),
(30, 'wishlist', '0002_alter_wishlist_unique_together_alter_wishlist_user', '2026-06-26 10:51:11.440384'),
(31, 'cart', '0002_cart_coupon', '2026-06-30 05:07:15.361916'),
(32, 'checkout', '0002_shippingaddress_is_default_and_more', '2026-06-30 09:32:24.255958');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('5yy6m0dx2352p8hrphhuly4qxu260cxd', '.eJxVjDsOwjAQBe_iGlnZxJ81JT1nsHa9Fg4gW4qTCnF3iJQC2jcz76UibWuJW89LnEWdFajT78aUHrnuQO5Ub02nVtdlZr0r-qBdX5vk5-Vw_w4K9fKteQpsjCAN3oZEOaCjRGLHCXy2IIJIBtEbExhcCmOYrMvsGRgGsUm9P-ICN7A:1wew1S:InXIsuQnisHmvoNHOan0pLxQLclcgCdHqA0QB_SlPhw', '2026-07-15 14:34:42.430724');

-- --------------------------------------------------------

--
-- Table structure for table `orders_order`
--

CREATE TABLE `orders_order` (
  `id` bigint NOT NULL,
  `order_number` varchar(50) NOT NULL,
  `subtotal` decimal(12,2) NOT NULL,
  `tax` decimal(12,2) NOT NULL,
  `shipping_charge` decimal(12,2) NOT NULL,
  `grand_total` decimal(12,2) NOT NULL,
  `payment_status` varchar(20) NOT NULL,
  `order_status` varchar(20) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `shipping_address_id` bigint DEFAULT NULL,
  `user_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders_order`
--

INSERT INTO `orders_order` (`id`, `order_number`, `subtotal`, `tax`, `shipping_charge`, `grand_total`, `payment_status`, `order_status`, `created_at`, `shipping_address_id`, `user_id`) VALUES
(1, 'ORD-CDC09A21', 700.00, 0.00, 50.00, 750.00, 'Pending', 'Pending', '2026-06-30 14:26:20.581010', 1, 2),
(2, 'ORD-0CF0507E', 100.00, 0.00, 50.00, 150.00, 'Pending', 'Pending', '2026-06-30 14:37:19.412484', 1, 2),
(3, 'ORD-84231802', 100.00, 0.00, 50.00, 150.00, 'Pending', 'Pending', '2026-06-30 14:43:00.964042', 1, 2),
(4, 'ORD-CE10F13F', 100.00, 0.00, 50.00, 150.00, 'Pending', 'Pending', '2026-06-30 14:46:17.248233', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders_orderitem`
--

CREATE TABLE `orders_orderitem` (
  `id` bigint NOT NULL,
  `quantity` int UNSIGNED NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `subtotal` decimal(12,2) NOT NULL,
  `order_id` bigint NOT NULL,
  `product_id` bigint DEFAULT NULL
) ;

--
-- Dumping data for table `orders_orderitem`
--

INSERT INTO `orders_orderitem` (`id`, `quantity`, `price`, `subtotal`, `order_id`, `product_id`) VALUES
(1, 7, 100.00, 700.00, 1, 1),
(2, 1, 100.00, 100.00, 2, 1),
(3, 1, 100.00, 100.00, 3, 1),
(4, 1, 100.00, 100.00, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products_product`
--

CREATE TABLE `products_product` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `short_description` longtext,
  `price` decimal(10,2) NOT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `stock` int UNSIGNED NOT NULL,
  `sku` varchar(100) NOT NULL,
  `brand_id` bigint DEFAULT NULL,
  `featured` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `category_id` bigint NOT NULL
) ;

--
-- Dumping data for table `products_product`
--

INSERT INTO `products_product` (`id`, `name`, `slug`, `description`, `short_description`, `price`, `discount_price`, `stock`, `sku`, `brand_id`, `featured`, `status`, `created_at`, `updated_at`, `category_id`) VALUES
(1, 'Phasellus Gravida test', 'phasellus-gravida-test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac tellus dignissim, at dignissim libero tempor. Duis convallis ante id id id finibus. Praesent feugiat accumsan nisl, vel finibus leo pulvinar vel.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac tellus dignissim, at dignissim libero tempor. Duis convallis ante id id id finibus. Praesent feugiat accumsan nisl, vel finibus leo pulvinar vel.', 100.00, 120.00, 10, 'NATP-WL-24x36-CAN-0010', NULL, 1, 1, '2026-06-27 04:44:22.797112', '2026-07-01 09:38:23.177761', 1),
(2, 'Phasellus Gravida', 'phasellus-gravida', 'Phasellus Gravida', '', 300.00, 345.00, 100, 'NATP-WL-24x36-CAN-00190', 4, 1, 1, '2026-07-01 09:10:50.144308', '2026-07-01 14:35:14.455212', 1),
(3, 'Santu Garai', 'santu-garai', 'Santu Garai', 'Santu Garai', 34.00, 56.00, 340, 'NATP-WL-24x36-CAN-001900', 3, 1, 1, '2026-07-01 09:35:45.548184', '2026-07-01 09:36:06.775278', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products_productimage`
--

CREATE TABLE `products_productimage` (
  `id` bigint NOT NULL,
  `image` varchar(100) NOT NULL,
  `is_primary` tinyint(1) NOT NULL,
  `product_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products_productimage`
--

INSERT INTO `products_productimage` (`id`, `image`, `is_primary`, `product_id`) VALUES
(1, 'products/product-1_g99F8VR.png', 1, 1),
(2, 'products/product-2_sCLOA9H.png', 1, 2),
(3, 'products/product-3_wlDdH1Q.png', 1, 3),
(4, 'products/product-5_Wq7iim2.png', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist_wishlist`
--

CREATE TABLE `wishlist_wishlist` (
  `id` bigint NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `product_id` bigint NOT NULL,
  `user_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts_user`
--
ALTER TABLE `accounts_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `accounts_user_groups`
--
ALTER TABLE `accounts_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accounts_user_groups_user_id_group_id_59c0b32f_uniq` (`user_id`,`group_id`),
  ADD KEY `accounts_user_groups_group_id_bd11a704_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `accounts_user_user_permissions`
--
ALTER TABLE `accounts_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accounts_user_user_permi_user_id_permission_id_2ab516c2_uniq` (`user_id`,`permission_id`),
  ADD KEY `accounts_user_user_p_permission_id_113bb443_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `banners_banner`
--
ALTER TABLE `banners_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands_brand`
--
ALTER TABLE `brands_brand`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `cart_cart`
--
ALTER TABLE `cart_cart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD KEY `cart_cart_coupon_id_0e43a044_fk_coupons_coupon_id` (`coupon_id`);

--
-- Indexes for table `cart_cartitem`
--
ALTER TABLE `cart_cartitem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cart_cartitem_cart_id_product_id_53cce7c3_uniq` (`cart_id`,`product_id`),
  ADD KEY `cart_cartitem_product_id_b24e265a_fk_products_product_id` (`product_id`);

--
-- Indexes for table `catalog_category`
--
ALTER TABLE `catalog_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `checkout_shippingaddress`
--
ALTER TABLE `checkout_shippingaddress`
  ADD PRIMARY KEY (`id`),
  ADD KEY `checkout_shippingaddress_user_id_a2bf6b55_fk_accounts_user_id` (`user_id`);

--
-- Indexes for table `coupons_coupon`
--
ALTER TABLE `coupons_coupon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_accounts_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `orders_order`
--
ALTER TABLE `orders_order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_number` (`order_number`),
  ADD KEY `orders_order_shipping_address_id_c4f8227a_fk_checkout_` (`shipping_address_id`),
  ADD KEY `orders_order_user_id_e9b59eb1_fk_accounts_user_id` (`user_id`);

--
-- Indexes for table `orders_orderitem`
--
ALTER TABLE `orders_orderitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_orderitem_order_id_fe61a34d_fk_orders_order_id` (`order_id`),
  ADD KEY `orders_orderitem_product_id_afe4254a_fk_products_product_id` (`product_id`);

--
-- Indexes for table `products_product`
--
ALTER TABLE `products_product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `sku` (`sku`),
  ADD KEY `products_product_category_id_9b594869_fk_catalog_category_id` (`category_id`),
  ADD KEY `products_product_brand_id_3e2e8fd1` (`brand_id`);

--
-- Indexes for table `products_productimage`
--
ALTER TABLE `products_productimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_productimage_product_id_e747596a_fk_products_product_id` (`product_id`);

--
-- Indexes for table `wishlist_wishlist`
--
ALTER TABLE `wishlist_wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishlist_wishlist_product_id_2d08b75d_fk_products_product_id` (`product_id`),
  ADD KEY `wishlist_wishlist_user_id_13f28b16` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts_user`
--
ALTER TABLE `accounts_user`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `accounts_user_groups`
--
ALTER TABLE `accounts_user_groups`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `accounts_user_user_permissions`
--
ALTER TABLE `accounts_user_user_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `banners_banner`
--
ALTER TABLE `banners_banner`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands_brand`
--
ALTER TABLE `brands_brand`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cart_cart`
--
ALTER TABLE `cart_cart`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_cartitem`
--
ALTER TABLE `cart_cartitem`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `catalog_category`
--
ALTER TABLE `catalog_category`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `checkout_shippingaddress`
--
ALTER TABLE `checkout_shippingaddress`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coupons_coupon`
--
ALTER TABLE `coupons_coupon`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `orders_order`
--
ALTER TABLE `orders_order`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders_orderitem`
--
ALTER TABLE `orders_orderitem`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products_product`
--
ALTER TABLE `products_product`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products_productimage`
--
ALTER TABLE `products_productimage`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wishlist_wishlist`
--
ALTER TABLE `wishlist_wishlist`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts_user_groups`
--
ALTER TABLE `accounts_user_groups`
  ADD CONSTRAINT `accounts_user_groups_group_id_bd11a704_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `accounts_user_groups_user_id_52b62117_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

--
-- Constraints for table `accounts_user_user_permissions`
--
ALTER TABLE `accounts_user_user_permissions`
  ADD CONSTRAINT `accounts_user_user_p_permission_id_113bb443_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `accounts_user_user_p_user_id_e4f0a161_fk_accounts_` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `cart_cart`
--
ALTER TABLE `cart_cart`
  ADD CONSTRAINT `cart_cart_coupon_id_0e43a044_fk_coupons_coupon_id` FOREIGN KEY (`coupon_id`) REFERENCES `coupons_coupon` (`id`),
  ADD CONSTRAINT `cart_cart_user_id_9b4220b9_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

--
-- Constraints for table `cart_cartitem`
--
ALTER TABLE `cart_cartitem`
  ADD CONSTRAINT `cart_cartitem_cart_id_370ad265_fk_cart_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `cart_cart` (`id`),
  ADD CONSTRAINT `cart_cartitem_product_id_b24e265a_fk_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`);

--
-- Constraints for table `checkout_shippingaddress`
--
ALTER TABLE `checkout_shippingaddress`
  ADD CONSTRAINT `checkout_shippingaddress_user_id_a2bf6b55_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

--
-- Constraints for table `orders_order`
--
ALTER TABLE `orders_order`
  ADD CONSTRAINT `orders_order_shipping_address_id_c4f8227a_fk_checkout_` FOREIGN KEY (`shipping_address_id`) REFERENCES `checkout_shippingaddress` (`id`),
  ADD CONSTRAINT `orders_order_user_id_e9b59eb1_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);

--
-- Constraints for table `orders_orderitem`
--
ALTER TABLE `orders_orderitem`
  ADD CONSTRAINT `orders_orderitem_order_id_fe61a34d_fk_orders_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders_order` (`id`),
  ADD CONSTRAINT `orders_orderitem_product_id_afe4254a_fk_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`);

--
-- Constraints for table `products_product`
--
ALTER TABLE `products_product`
  ADD CONSTRAINT `products_product_brand_id_3e2e8fd1_fk_brands_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands_brand` (`id`),
  ADD CONSTRAINT `products_product_category_id_9b594869_fk_catalog_category_id` FOREIGN KEY (`category_id`) REFERENCES `catalog_category` (`id`);

--
-- Constraints for table `products_productimage`
--
ALTER TABLE `products_productimage`
  ADD CONSTRAINT `products_productimage_product_id_e747596a_fk_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`);

--
-- Constraints for table `wishlist_wishlist`
--
ALTER TABLE `wishlist_wishlist`
  ADD CONSTRAINT `wishlist_wishlist_product_id_2d08b75d_fk_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`),
  ADD CONSTRAINT `wishlist_wishlist_user_id_13f28b16_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
