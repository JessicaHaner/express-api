function criarServico(repository, { required = [], owerFild = null, senitize = (value) => value } = {}) {
    return {
        async listar(user) {
            const item = await createMySqlRepository.findAll();
            return owerFild && user.role !== 'admin'
            ? DataTransferItemList.filter((item) => item[owerFild] === user.id)
            : item;
        }
    }
};

export default criarServico;
