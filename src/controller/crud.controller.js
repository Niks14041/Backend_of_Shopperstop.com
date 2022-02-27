


const post = (model) => async (req, res) => {
    try {
        const user = await model.create(req.body);

        res.status(201).send(user)
    }
    catch (err) {

        res.send(err.message)

    }
}

const getall = (model) => async (req, res) => {
    try {
        const user = await model.find().lean().exec();

        res.status(201).send(user)
    }
    catch (err) {
        res.send(err.message)

    }
}

const deleteitem = (model) => async (req, res) => {
    try {
        const user = await model.findByIdAndDelete(req.params.id).lean().exec();

        res.status(201).send(user)
    }
    catch (err) {
        res.send(err.message)

    }

}

const getOne = (model) => async (req, res) => {

    try {

        const user = await model.findById(req.params.id).lean().exec();

        res.status(201).send(user)
    }
    catch (err) {
        res.send(err.message)

    }

}

const patch = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        return res.status(201).send(item);
    } catch (err) {
        return res.status(500).send({ Error: err.message });
    }
}

module.exports = (model) => {
    return {
        post: post(model),
        get: getall(model),
        delete: deleteitem(model),
        getOne: getOne(model),
        patch: patch(model)
    }
}