import { TranslationMessages } from 'ra-core';

const spanishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Aplicar filtro', // Check context
            add: 'Añadir',
            back: 'Volver',
            bulk_actions:
                '%{smart_count} seleccionado |||| %{smart_count} seleccionados',
            cancel: 'Cancelar',
            clear_array_input: 'Vaciar lista',
            clear_input_value: 'Vaciar campo',
            clone: 'Duplicar',
            confirm: 'Confirmar',
            create: 'Crear',
            create_item: 'Crear %{item}',
            delete: 'Eliminar', // Check
            edit: 'Editar',
            export: 'Exportar',
            list: 'Lista',
            refresh: 'Actualizar',
            remove_filter: 'Limpiar filtro', // Check
            remove_all_filters: 'Limpiar todos los filtros', // Check
            remove: 'Eliminar', // Check
            save: 'Guardar',
            search: 'Buscar',
            select_all: 'Seleccionar todo',
            select_row: 'Seleccionar esta fila',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Deshacer',
            unselect: 'Deseleccionar',
            expand: 'Expandir',
            close: 'Cerrar',
            open_menu: 'Abrir menú',
            close_menu: 'Cerrar menú',
            update: 'Actualizar',
            move_up: 'Mover hacia arriba', // Check context
            move_down: 'Mover hacia abajo', // Check context
            open: 'Abrir',
            toggle_theme: 'Alternar tema',
            select_columns: 'Columnas',
        },
        boolean: {
            true: 'Sí',
            false: 'No',
            null: ' ',
        },
        page: {
            create: 'Crear %{name}',
            dashboard: 'Tablero',
            edit: '%{name} %{recordRepresentation}',
            error: 'Algo salió mal',
            list: '%{name}',
            loading: 'Cargando',
            not_found: 'No encontrado',
            show: '%{name} %{recordRepresentation}',
            empty: 'Sin %{name} todavía.',
            invite: '¿Desea añadir una?', // Check
        },
        input: {
            file: {
                upload_several:
                    'Arraste los archivos a subir o haga click para seleccionarlos.',
                upload_single:
                    'Arrastre el archivo a subir o haga click para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Arrastre las imágenes a subir o haga click para seleccionarlas.',
                upload_single:
                    "Arrastre la imagen a subir o haga click para seleccionarla.",
            },
            references: {
                all_missing: 'No es posible encontrar datos de referencia.',
                many_missing:
                    'Al menos una de las referencias asociadas parece ya no estar disponible.',
                single_missing:
                    'La referencia asociada parece ya no estar disponible.',
            },
            password: {
                toggle_visible: 'Ocultar contraseña',
                toggle_hidden: 'Nostrar contraseña',
            },
        },
        message: {
            about: 'Acerca de',
            are_you_sure: '¿Está seguro/a?',
            auth_error:
                "Ocurrió un error al validar el tóken de autenticación.",
            bulk_delete_content:
                '¿Está seguro/a de eliminar este elemento (%{name})? |||| ¿Está seguro/a de eliminar estos %{smart_count} elementos (%{name})?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name}',
            bulk_update_content:
                '¿Está seguro/a de modificar este elemento (%{name})? |||| ¿Está seguro/a de modificar estos %{smart_count} elementos (%{name})?',
            bulk_update_title:
                'Modificar %{name} |||| Modificar %{smart_count} %{name}',
            clear_array_input:
                '¿Está seguro/a de vaciar todos los elementos de la lista?',
            delete_content:
                '¿Está seguro/a de eliminar este elemento?',
            delete_title: 'Eliminar %{name} #%{id}',
            details: 'Detalles',
            error:
                "Ha ocurrido un error en el cliente y no se ha podido completar su petición.",

            invalid_form: "El formulario no es válido.",
            loading:
                'La página se está cargando. Espere un momento, por favor.',
            no: 'No',
            not_found:
                "La URL ingresada es incorrecta o ha seguido un enlace incorrecto.",
            yes: 'Sí',
            unsaved_changes:
                "Algunos cambios no se han guardado. ¿Está seguro/a de querer salir de esta página?",
        },
        navigation: {
            no_results: 'Ningún resultado',
            no_more_results:
                'El número de página %{page} está fuera de los límites. Intente con la página anterior.',
            page_out_of_boundaries: 'La página %{page} está fuera de los límites.',
            page_out_from_end: 'Fin de la paginación',
            page_out_from_begin: 'La página debe ser mayor que 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} de más de %{offsetEnd}',
            page_rows_per_page: 'Filas por página:',
            current_page: 'Página %{page}',
            page: 'Ir a la página %{page}',
            first: 'Ir a la primera página',
            last: 'Ir a la última página',
            next: 'Ir a la página siguiente',
            previous: 'Ir a la página anterior',
            skip_nav: 'Saltar al contenido',
        },
        sort: {
            sort_by: 'Ordenar por %{field} %{order}',
            ASC: 'ascendente',
            DESC: 'descendente',
        },
        auth: {
            auth_check_error: 'Por favor, inicie sesión para continuar.',
            user_menu: 'Perfil',
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Ingresar',
            sign_in_error: "Autenticación fallida. Por favor, vuelva a intentarlo.",
            logout: 'Cerrar sesión',
        },
        notification: {
            updated:
                'Elemento acutalizado |||| %{smart_count} elementos actualizados',
            created: 'Elemento creado',
            deleted: 'Élément supprimé |||| %{smart_count} éléments supprimés',
            bad_item: 'Elemento incorrecto',
            item_doesnt_exist: "El elemento no existe",
            http_error: 'Error de comunicación con el servidor',
            data_provider_error:
                'Error en el dataProvider. Más detalles en la consola.',
            i18n_error:
                'Error al cargar las traducciones del idioma seleccionado',
            canceled: 'Acción cancelada',
            logged_out: 'Su sesión ha finalizado. Por favor, inicie sesión nuevamente.',
            not_authorized:
                "No está autorizado/a para acceder a este recurso.",
        },
        validation: {
            required: 'Este campo es obligatorio',
            minLength: 'Mínimo %{min} caracteres',
            maxLength: 'Máximo %{max} caracteres',
            minValue: 'Mínimo %{min}',
            maxValue: 'Máximo %{max}',
            number: 'Debe ser un número',
            email: 'Debe ser un email',
            oneOf: 'Debe ser uno de: %{options}',
            regex: 'Debe coincidir con un formato específico (regexp): %{pattern}',
        },
        saved_queries: {
            label: 'Mis consultas',
            query_name: 'Nombre de la consulta',
            new_label: 'Añadir a «mis consultas»...',
            new_dialog_title: 'Añadir la consulta actual a «mis consultas»',
            remove_label: 'Eliminar de «mis consultas»',
            remove_label_with_name: 'Eliminar "%{name}" de «mis consultas»',
            remove_dialog_title: '¿Eliminar de «mis consultas»?',
            remove_message:
                '¿Está seguro/a de que desea eliminar esta consulta de su lista de consultas?',
            help: 'Filtrar la lista y guardar esta consulta para su lista',
        },
        configurable: {
            customize: 'Personalizar',
            configureMode: 'Configurar esta página',
            inspector: {
                title: 'Inspector',
                content: 'Seleccione un componente para configurarlo',
                reset: 'Reiniciar',
                hideAll: 'Ocultar todo',
                showAll: 'Mostrar todo',
            },
            Datagrid: {
                title: 'Tablero',
                unlabeled: 'Columna #%{column}',
            },
            SimpleForm: {
                title: 'Formulario',
                unlabeled: 'Campo #%{input}',
            },
            SimpleList: {
                title: 'Lista',
                primaryText: 'Texto principal',
                secondaryText: 'Texto secundario',
                tertiaryText: 'Texto anexo',
            },
        },
    },
};

export default spanishMessages;
