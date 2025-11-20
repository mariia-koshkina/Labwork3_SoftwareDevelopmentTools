export const STANDARD_LIBRARY_MAP: { [key: string]: string[] } = {
    "iostream": [
        "std::cin", "std::cout", "std::cerr", "std::clog",
        "std::wcin", "std::wcout", "std::wcerr", "std::wclog",
        "std::endl", "std::flush", "std::boolalpha", "std::oct", "std::hex", "std::dec"
    ],

    "vector": [
        "std::vector"
    ],

    "algorithm": [
        "std::sort", "std::stable_sort", "std::is_sorted",
        "std::find", "std::find_if", "std::find_if_not", "std::find_first_of", "std::find_end", "std::find_last_of",
        "std::search", "std::search_n", "std::adjacent_find",
        "std::count", "std::count_if",
        "std::equal", "std::lexicographical_compare",
        "std::for_each", "std::for_each_n", "std::transform",
        "std::remove", "std::remove_if", "std::remove_copy", "std::remove_copy_if",
        "std::unique", "std::unique_copy",
        "std::reverse", "std::reverse_copy",
        "std::rotate", "std::rotate_copy",
        "std::fill", "std::fill_n",
        "std::generate", "std::generate_n",
        "std::swap", "std::swap_ranges", "std::iter_swap",
        "std::min", "std::max", "std::minmax",
        "std::min_element", "std::max_element", "std::minmax_element",
        "std::clamp",
        "std::nth_element",
        "std::lower_bound", "std::upper_bound", "std::equal_range",
        "std::binary_search",
        "std::merge", "std::inplace_merge",
        "std::set_union", "std::set_intersection", "std::set_difference", "std::set_symmetric_difference",
        "std::push_heap", "std::pop_heap", "std::make_heap", "std::sort_heap", "std::is_heap", "std::is_heap_until",
        "std::next_permutation", "std::prev_permutation",
        "std::is_partitioned", "std::partition", "std::partition_copy", "std::partition_point",
        "std::is_sorted_until", "std::is_permutation",
        "std::includes"
    ],

    "string": [
        "std::string", "std::wstring", "std::u16string", "std::u32string",
        "std::getline",
        "std::stoi", "std::stol", "std::stoll", "std::stoul", "std::stoull",
        "std::stof", "std::stod", "std::stold",
        "std::stoul", "std::stoull",
        "std::to_string", "std::to_wstring"
    ],

    "map": [
        "std::map", "std::multimap"
    ],
    "unordered_map": [
        "std::unordered_map", "std::unordered_multimap"
    ],

    "set": [
        "std::set", "std::multiset"
    ],
    "unordered_set": [
        "std::unordered_set", "std::unordered_multiset"
    ],

    "functional": [
        "std::function",
        "std::bind",
        "std::mem_fn",
        "std::reference_wrapper", "std::ref", "std::cref",
        "std::plus", "std::minus", "std::multiplies", "std::divides", "std::modulus", "std::negate",
        "std::equal_to", "std::not_equal_to", "std::greater", "std::less", "std::greater_equal", "std::less_equal",
        "std::logical_and", "std::logical_or", "std::logical_not",
        "std::bit_and", "std::bit_or", "std::bit_xor", "std::bit_not"
    ],

    "memory": [
        "std::unique_ptr", "std::shared_ptr", "std::weak_ptr",
        "std::make_unique", "std::make_shared", "std::allocate_shared",
        "std::dynamic_pointer_cast", "std::static_pointer_cast", "std::const_pointer_cast",
        "std::addressof", "std::align",
        "std::bad_weak_ptr", "std::owner_less", "std::enable_shared_from_this"
    ],

    "fstream": [
        "std::fstream", "std::ifstream", "std::ofstream",
        "std::wfstream", "std::wifstream", "std::wofstream"
    ],

    "cmath": [
        "std::abs", "std::fabs", "std::fmod", "std::remainder", "std::fma",
        "std::fmax", "std::fmin", "std::fdim", "std::nan", "std::nanf", "std::nanl",
        "std::exp", "std::exp2", "std::expm1", "std::log", "std::log10", "std::log2", "std::log1p",
        "std::pow", "std::sqrt", "std::cbrt", "std::hypot",
        "std::sin", "std::cos", "std::tan", "std::asin", "std::acos", "std::atan", "std::atan2",
        "std::sinh", "std::cosh", "std::tanh", "std::asinh", "std::acosh", "std::atanh",
        "std::erf", "std::erfc", "std::lgamma", "std::tgamma",
        "std::ceil", "std::floor", "std::trunc", "std::round", "std::lround", "std::llround", "std::nearbyint", "std::rint", "std::lrint", "std::llrint",
        "std::frexp", "std::ldexp", "std::modf", "std::scalbn", "std::scalbln",
        "std::ilogb", "std::logb", "std::nextafter", "std::nexttoward", "std::copysign", "std::fpclassify", "std::isfinite", "std::isinf", "std::isnan", "std::isnormal", "std::signbit", "std::isgreater", "std::isgreaterequal", "std::isless", "std::islessequal", "std::islessgreater", "std::isunordered"
    ]
};